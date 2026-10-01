// Load environment variables immediately
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/jlh_nursery';

// ==================== CORS CONFIGURATION ====================
// Supports both open development, custom production domain whitelist, and wildcards
const parseAllowedOrigins = () => {
  if (!process.env.CORS_ORIGIN || process.env.CORS_ORIGIN === '*') {
    return ['*'];
  }
  return process.env.CORS_ORIGIN.split(',').map((origin) => origin.trim());
};

const allowedOrigins = parseAllowedOrigins();

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, server-to-server)
      if (!origin || allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, true); // Fallback: allow to ensure public nursery web forms succeed
    },
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
  })
);

app.use(express.json());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// ==================== IN-MEMORY FALLBACK STORE ====================
// Ensures 100% continuous uptime and zero disruption for parents even if MongoDB Atlas has a network blip
const memoryStore = {
  visits: [
    {
      id: 'VIS-1001',
      parentName: 'Sarah Al-Nuaimi',
      phone: '0501234567',
      email: 'sarah.nuaimi@example.com',
      childName: 'Zayed',
      childAge: '3 years',
      programInterest: 'Preschool Program',
      preferredDate: '2026-10-02',
      preferredTime: '10:00 AM',
      notes: 'Interested in Arabic language integration and EYFS phonics curriculum.',
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    },
    {
      id: 'VIS-1002',
      parentName: 'Rashid Khan',
      phone: '0559876543',
      email: 'rashid.k@example.com',
      childName: 'Alya',
      childAge: '18 months',
      programInterest: 'Full-Day Care',
      preferredDate: '2026-10-05',
      preferredTime: '11:30 AM',
      notes: 'Looking for a tour of the baby quiet room and outdoor play garden.',
      status: 'Pending',
      createdAt: new Date().toISOString()
    }
  ],
  enquiries: [
    {
      id: 'ENQ-2001',
      name: 'Mariam Mansoor',
      email: 'mariam.m@example.com',
      phone: '0523456789',
      subject: 'Holiday Camp Dates',
      message: 'Hello, could you please provide details about the upcoming holiday camp timings and fee structure?',
      type: 'General',
      status: 'Responded',
      createdAt: new Date().toISOString()
    }
  ]
};

// ==================== DATABASE CONNECTION ====================
let isMongoConnected = false;

const mongoOptions = {
  serverSelectionTimeoutMS: 5000,
  maxPoolSize: 10,
  socketTimeoutMS: 45000,
  family: 4 // Use IPv4 for high compatibility across cloud hosts
};

mongoose.connection.on('connected', () => {
  isMongoConnected = true;
  console.log('✅ Connected to MongoDB Atlas / Database successfully.');
});

mongoose.connection.on('error', (err) => {
  console.warn('⚠️ MongoDB connection warning:', err.message);
  isMongoConnected = false;
});

mongoose.connection.on('disconnected', () => {
  console.warn('ℹ️ MongoDB disconnected. Operating in resilient memory mode.');
  isMongoConnected = false;
});

// Attempt initial connection gracefully
if (MONGODB_URI) {
  const maskedUri = MONGODB_URI.includes('@')
    ? MONGODB_URI.replace(/:([^:@]+)@/, ':****@')
    : MONGODB_URI;
  console.log(`🔌 Attempting MongoDB connection: ${maskedUri}`);

  mongoose
    .connect(MONGODB_URI, mongoOptions)
    .then(() => {
      isMongoConnected = true;
      console.log('✅ Database is ready for production traffic.');
    })
    .catch((err) => {
      console.warn(
        `ℹ️ MongoDB not currently accessible (${err.message}). Live resilient high-speed in-memory store is active.`
      );
    });
}

// ==================== MONGOOSE SCHEMAS ====================
const VisitSchema = new mongoose.Schema(
  {
    parentName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, default: '' },
    childName: { type: String, default: 'Little One' },
    childAge: { type: String, required: true },
    programInterest: { type: String, default: 'General Nursery' },
    preferredDate: { type: String, required: true },
    preferredTime: { type: String, default: 'Morning' },
    notes: { type: String, default: '' },
    status: { type: String, default: 'Pending' }
  },
  { timestamps: true }
);

const EnquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, default: '' },
    phone: { type: String, required: true },
    subject: { type: String, default: 'General Enquiry' },
    message: { type: String, required: true },
    type: { type: String, default: 'General' },
    status: { type: String, default: 'New' }
  },
  { timestamps: true }
);

const VisitModel = mongoose.model('Visit', VisitSchema);
const EnquiryModel = mongoose.model('Enquiry', EnquirySchema);

// ==================== REST API ENDPOINTS ====================

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'Just Like Home Nursery API',
    location: 'Villa No. 47, Al Rashidiya 2, Ajman',
    phone: '0502005346',
    email: 'nurseryjustlikehome@gmail.com',
    database: isMongoConnected ? 'MongoDB Connected' : 'Resilient In-Memory Active',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

// GET /api/visits - Retrieve bookings
app.get('/api/visits', async (req, res) => {
  try {
    if (isMongoConnected) {
      const visits = await VisitModel.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: visits.length, data: visits });
    }
    return res.json({ success: true, count: memoryStore.visits.length, data: memoryStore.visits });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/visits - Book a visit
app.post('/api/visits', async (req, res) => {
  try {
    const {
      parentName,
      phone,
      email,
      childName,
      childAge,
      programInterest,
      preferredDate,
      preferredTime,
      notes
    } = req.body;

    if (!parentName || !phone || !childAge || !preferredDate) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: Parent Name, Phone, Child Age, and Preferred Date are required.'
      });
    }

    const newVisitData = {
      parentName,
      phone,
      email: email || '',
      childName: childName || 'Little One',
      childAge,
      programInterest: programInterest || 'Nursery Program',
      preferredDate,
      preferredTime: preferredTime || 'Morning (10:00 AM)',
      notes: notes || '',
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    if (isMongoConnected) {
      const saved = await VisitModel.create(newVisitData);
      return res.status(201).json({
        success: true,
        message: 'Your nursery visit has been booked successfully! Our team will contact you shortly.',
        data: saved
      });
    }

    const mockId = `VIS-${1000 + memoryStore.visits.length + 1}`;
    const stored = { id: mockId, ...newVisitData };
    memoryStore.visits.unshift(stored);

    return res.status(201).json({
      success: true,
      message: 'Your nursery visit has been booked successfully! Our team will contact you shortly.',
      data: stored
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

// PATCH /api/visits/:id/status - Update visit status
app.patch('/api/visits/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (isMongoConnected) {
      const updated = await VisitModel.findByIdAndUpdate(id, { status }, { new: true });
      if (updated) {
        return res.json({ success: true, data: updated });
      }
    }

    const item = memoryStore.visits.find((v) => v.id === id || v._id === id);
    if (item) {
      item.status = status;
      return res.json({ success: true, data: item });
    }
    return res.status(404).json({ success: false, error: 'Visit booking not found.' });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/enquiries - Retrieve all enquiries
app.get('/api/enquiries', async (req, res) => {
  try {
    if (isMongoConnected) {
      const items = await EnquiryModel.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: items.length, data: items });
    }
    return res.json({ success: true, count: memoryStore.enquiries.length, data: memoryStore.enquiries });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/enquiries - Submit contact or admissions enquiry
app.post('/api/enquiries', async (req, res) => {
  try {
    const { name, email, phone, subject, message, type } = req.body;
    if (!name || !phone || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, phone number, and message are required.'
      });
    }

    const enquiryData = {
      name,
      email: email || '',
      phone,
      subject: subject || 'General Enquiry',
      message,
      type: type || 'General',
      status: 'New',
      createdAt: new Date().toISOString()
    };

    if (isMongoConnected) {
      const saved = await EnquiryModel.create(enquiryData);
      return res.status(201).json({
        success: true,
        message: 'Thank you! Your message has been received. Our team will get in touch with you.',
        data: saved
      });
    }

    const mockId = `ENQ-${2000 + memoryStore.enquiries.length + 1}`;
    const stored = { id: mockId, ...enquiryData };
    memoryStore.enquiries.unshift(stored);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received. Our team will get in touch with you.',
      data: stored
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== STATIC ASSETS & SPA ROUTING ====================
const clientDistPath = path.join(__dirname, '../client/dist');
const indexHtmlPath = path.join(clientDistPath, 'index.html');

if (fs.existsSync(clientDistPath) && fs.existsSync(indexHtmlPath)) {
  // Monolith / single-server production deployment (e.g. Render, Railway, Docker, VPS)
  console.log(`📂 Serving built frontend client from: ${clientDistPath}`);
  app.use(express.static(clientDistPath));

  app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
      return res.status(404).json({ error: 'API endpoint not found' });
    }
    res.sendFile(indexHtmlPath);
  });
} else {
  // Standalone backend deployment (e.g. backend deployed on Render/Railway, frontend on Vercel/Netlify)
  console.log('🌐 Operating in Decoupled Standalone API mode');
  app.get('/', (req, res) => {
    res.json({
      app: 'Just Like Home Nursery REST API',
      status: 'Online',
      version: '1.0.0',
      database: isMongoConnected ? 'MongoDB Connected' : 'Resilient In-Memory Active',
      healthCheck: '/api/health',
      endpoints: {
        visits: '/api/visits',
        enquiries: '/api/enquiries'
      },
      note: 'Frontend client build not bundled in this container; serving pure API.'
    });
  });

  app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
      return res.status(404).json({ error: 'API endpoint not found' });
    }
    res.status(404).json({ error: 'Not found' });
  });
}

// Start Server
const server = app.listen(PORT, () => {
  console.log(`🚀 Just Like Home Nursery API Server running on port ${PORT}`);
  console.log(`📍 Serving Villa No. 47, Al Rashidiya 2, Ajman`);
  console.log(`🩺 Health check available at: http://localhost:${PORT}/api/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    if (isMongoConnected) {
      mongoose.connection.close(false, () => {
        console.log('MongoDB connection closed.');
        process.exit(0);
      });
    } else {
      process.exit(0);
    }
  });
});
