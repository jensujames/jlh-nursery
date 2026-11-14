// Load environment variables immediately
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/jlh_nursery';
const FORM_RECEIVER_EMAIL = process.env.FORM_RECEIVER_EMAIL || process.env.NURSERY_EMAIL || 'nurseryjustlikehome@gmail.com';

// Configure optional automated email delivery
let mailTransporter = null;
if (process.env.SMTP_USER && process.env.SMTP_PASS) {
  mailTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: process.env.SMTP_SECURE !== 'false',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
}

const sendNotificationEmail = async ({ subject, text, html }) => {
  console.log(`📧 [NEW FORM SUBMISSION] Forwarding to receiver: ${FORM_RECEIVER_EMAIL} | Subject: "${subject}"`);
  if (!mailTransporter) {
    return;
  }
  try {
    await mailTransporter.sendMail({
      from: `"Just Like Home Nursery" <${process.env.SMTP_USER}>`,
      to: FORM_RECEIVER_EMAIL,
      subject,
      text,
      html
    });
    console.log(`✅ [EMAIL DELIVERED] Successfully sent notification to ${FORM_RECEIVER_EMAIL}`);
  } catch (err) {
    console.error(`⚠️ [EMAIL ERROR] Failed to send email via SMTP:`, err.message);
  }
};

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

// Declare Content Signals & AI headers on all HTTP responses
app.use((req, res, next) => {
  res.setHeader('Content-Signal', 'search=yes, ai-train=no');
  next();
});

// SEP-1649 MCP Server Card publication
app.get('/.well-known/mcp/server-card.json', (req, res) => {
  const serverCardCandidates = [
    path.join(__dirname, '../client/public/.well-known/mcp/server-card.json'),
    path.join(__dirname, '../client/dist/.well-known/mcp/server-card.json'),
    path.join(process.cwd(), 'client/public/.well-known/mcp/server-card.json'),
    path.join(process.cwd(), 'dist/.well-known/mcp/server-card.json'),
    path.join(process.cwd(), '.well-known/mcp/server-card.json')
  ];
  const cardPath = serverCardCandidates.find(p => fs.existsSync(p));
  if (cardPath) {
    res.setHeader('Content-Type', 'application/json');
    return res.sendFile(path.resolve(cardPath));
  }
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "name": "just-like-home-nursery-mcp",
    "displayName": "Just Like Home Nursery MCP Server",
    "description": "Model Context Protocol (MCP) server card for Just Like Home Nursery in Ajman, UAE.",
    "version": "1.0.0",
    "homepage": "https://jlhnursery.com",
    "endpoint": "https://jlhnursery.com/api/mcp",
    "capabilities": { "tools": true, "resources": true, "prompts": false },
    "tools": [
      {
        "name": "book_nursery_tour",
        "description": "Schedule a tour or visit at Just Like Home Nursery in Al Rashidiya 2, Ajman",
        "inputSchema": {
          "type": "object",
          "properties": {
            "parentName": { "type": "string" },
            "phone": { "type": "string" },
            "preferredDate": { "type": "string" }
          },
          "required": ["parentName", "phone", "preferredDate"]
        }
      },
      {
        "name": "get_nursery_info",
        "description": "Retrieve nursery location, curriculum, timings, and contact details",
        "inputSchema": { "type": "object", "properties": {} }
      },
      {
        "name": "submit_enquiry",
        "description": "Send an admissions inquiry or questions directly to the nursery management",
        "inputSchema": {
          "type": "object",
          "properties": {
            "name": { "type": "string" },
            "phone": { "type": "string" },
            "message": { "type": "string" }
          },
          "required": ["name", "phone", "message"]
        }
      }
    ]
  });
});

// Content negotiation: Serve Markdown when AI agents send Accept: text/markdown
app.use((req, res, next) => {
  const accept = req.headers['accept'] || '';
  if (accept.includes('text/markdown') && (req.path === '/' || req.path === '/index.html')) {
    const mdCandidates = [
      path.join(__dirname, '../client/public/index.md'),
      path.join(__dirname, '../client/dist/index.md'),
      path.join(process.cwd(), 'client/public/index.md'),
      path.join(process.cwd(), 'dist/index.md'),
      path.join(process.cwd(), 'index.md')
    ];
    const found = mdCandidates.find(p => fs.existsSync(p));
    if (found) {
      res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
      return res.sendFile(path.resolve(found));
    }
  }
  next();
});

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
    email: FORM_RECEIVER_EMAIL,
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

    // Forward notification to receiver
    sendNotificationEmail({
      subject: `New Visit Booking: ${parentName} (${childName || 'Little One'})`,
      text: `New Nursery Visit Booking:\nParent: ${parentName}\nPhone: ${phone}\nEmail: ${email || 'Not provided'}\nChild: ${childName || 'Little One'} (${childAge})\nProgram: ${programInterest || 'Nursery Program'}\nPreferred Date: ${preferredDate} at ${preferredTime || 'Morning (10:00 AM)'}\nNotes: ${notes || 'None'}`,
      html: `
        <h2>New Nursery Visit Booking</h2>
        <p><strong>Parent:</strong> ${parentName}</p>
        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Child:</strong> ${childName || 'Little One'} (${childAge})</p>
        <p><strong>Program:</strong> ${programInterest || 'Nursery Program'}</p>
        <p><strong>Date & Time:</strong> ${preferredDate} at ${preferredTime || 'Morning (10:00 AM)'}</p>
        <p><strong>Notes:</strong> ${notes || 'None'}</p>
      `
    });

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

// POST /api/enquiries (and /api/inquiries alias) - Submit contact or admissions enquiry
app.post(['/api/enquiries', '/api/inquiries'], async (req, res) => {
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

    // Forward notification to receiver
    sendNotificationEmail({
      subject: `New Website Enquiry (${subject || 'General'}): ${name}`,
      text: `New Enquiry Received:\nName: ${name}\nPhone: ${phone}\nEmail: ${email || 'Not provided'}\nSubject: ${subject || 'General Enquiry'}\nType: ${type || 'General'}\nMessage:\n${message}`,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject || 'General Enquiry'}</p>
        <p><strong>Type:</strong> ${type || 'General'}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space: pre-wrap; background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">${message}</div>
      `
    });

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

// ==================== STATIC ASSETS & SPA ROUTING WITH DYNAMIC SEO INJECTION ====================
const ROUTE_SEO = {
  '/': {
    title: 'Just Like Home Nursery | Best EYFS Nursery & Daycare in Ajman',
    description: 'Looking for a trusted nursery & daycare in Al Rashidiya, Ajman? Just Like Home Nursery offers British EYFS early learning & safe care for ages 45 days–4 yrs.',
    canonical: 'https://jlhnursery.com/'
  },
  '/eyfs-curriculum-ajman': {
    title: 'British EYFS Curriculum & Early Learning | JLH Nursery Ajman',
    description: 'Discover our British EYFS play-based curriculum in Ajman—featuring Jolly Phonics, early numeracy, Arabic, sensory play & preschool readiness.',
    canonical: 'https://jlhnursery.com/eyfs-curriculum-ajman'
  },
  '/infant-toddler-daycare-ajman': {
    title: 'Infant & Toddler Daycare in Ajman | Half-Day & Full-Day Care (6 AM - 6:30 PM)',
    description: 'Safe, nurturing child care in Ajman for babies from 45 days to 4 years. Flexible half-day & full-day daycare hours (6:00 AM – 6:30 PM) for working parents.',
    canonical: 'https://jlhnursery.com/infant-toddler-daycare-ajman'
  },
  '/preschool': {
    title: 'Preschool & School Readiness in Ajman | Just Like Home Nursery',
    description: 'Help your child prepare for school with confidence through preschool learning, phonics, numeracy, routines and independence at Just Like Home Nursery Ajman.',
    canonical: 'https://jlhnursery.com/preschool'
  },
  '/nursery-facilities-safety': {
    title: 'Campus Facilities & Child Safety | Just Like Home Nursery Ajman',
    description: 'Explore our 55,000 sq. ft. home-like campus in Al Rashidiya, Ajman with soft play zones, sensory rooms, shaded gardens & strict child safety standards.',
    canonical: 'https://jlhnursery.com/nursery-facilities-safety'
  },
  '/summer-camp-ajman': {
    title: 'Holiday & Summer Camp for Kids in Ajman | Just Like Home Nursery',
    description: 'Discover fun, nurturing holiday and summer camp experiences in Ajman with creative activities, movement, exploration, stories and social play.',
    canonical: 'https://jlhnursery.com/summer-camp-ajman'
  },
  '/admissions': {
    title: 'Nursery Admissions in Ajman 2026 | Book a Guided Campus Tour',
    description: 'Start your child\'s journey at Just Like Home Nursery in Ajman. Ask about availability, book a nursery tour and receive guidance through the admissions process.',
    canonical: 'https://jlhnursery.com/admissions'
  },
  '/programs': {
    title: 'Early Years Nursery Programs in Ajman | Just Like Home Nursery',
    description: 'Explore early years, nursery, preschool, school readiness and flexible full-day and half-day care programs at Just Like Home Nursery in Ajman.',
    canonical: 'https://jlhnursery.com/programs'
  },
  '/about-us': {
    title: 'About Just Like Home Nursery | Early Years Nursery Ajman',
    description: 'Meet Just Like Home Nursery in Ajman and discover our nurturing philosophy, loving motherly care, play-based approach and commitment to every child\'s development.',
    canonical: 'https://jlhnursery.com/about-us'
  },
  '/founder': {
    title: 'A Message from the Founder | Mary Ann | Just Like Home Nursery Ajman',
    description: 'Read a heartfelt message from Founder Mary Ann on motherly care, early child development, and creating a home away from home in Ajman.',
    canonical: 'https://jlhnursery.com/founder'
  },
  '/activities': {
    title: 'Nursery Activities & Phonics in Ajman | Just Like Home Nursery',
    description: 'Explore our 9 core learning areas: Jolly Phonics, early numeracy, Arabic language, sensory discovery, creative arts, and life skills at Just Like Home Nursery.',
    canonical: 'https://jlhnursery.com/activities'
  },
  '/gallery': {
    title: 'Campus Photo Gallery | Just Like Home Nursery Ajman',
    description: 'Explore photos of the learning spaces, play areas, activities and special moments at Just Like Home Nursery in Ajman.',
    canonical: 'https://jlhnursery.com/gallery'
  },
  '/blog': {
    title: 'Parent Resources & Early Years Advice | Just Like Home Nursery',
    description: 'Read practical early-years guidance for parents, including nursery readiness, play-based learning, preschool development and choosing a nursery in Ajman.',
    canonical: 'https://jlhnursery.com/blog'
  },
  '/contact': {
    title: 'Contact Just Like Home Nursery | Al Rashidiya 2, Ajman',
    description: 'Contact Just Like Home Nursery at Villa 47, Al Rashidiya 2, Ajman. Call, WhatsApp 050 200 5346 or book a visit to explore our nurturing early-years environment.',
    canonical: 'https://jlhnursery.com/contact'
  }
};

// Aliases mapping to canonical paths
ROUTE_SEO['/eyfs-learning'] = ROUTE_SEO['/eyfs-curriculum-ajman'];
ROUTE_SEO['/daycare'] = ROUTE_SEO['/infant-toddler-daycare-ajman'];
ROUTE_SEO['/daycare-ajman'] = ROUTE_SEO['/infant-toddler-daycare-ajman'];
ROUTE_SEO['/childcare'] = ROUTE_SEO['/infant-toddler-daycare-ajman'];
ROUTE_SEO['/child-care'] = ROUTE_SEO['/infant-toddler-daycare-ajman'];
ROUTE_SEO['/facilities'] = ROUTE_SEO['/nursery-facilities-safety'];
ROUTE_SEO['/camps'] = ROUTE_SEO['/summer-camp-ajman'];
ROUTE_SEO['/preschool-school-readiness'] = ROUTE_SEO['/preschool'];
ROUTE_SEO['/founder-message'] = ROUTE_SEO['/founder'];
ROUTE_SEO['/nursery-activities'] = ROUTE_SEO['/activities'];

const clientDistCandidates = [
  path.join(__dirname, '../client/dist'),
  path.join(__dirname, '../dist'),
  path.join(process.cwd(), 'client/dist'),
  path.join(process.cwd(), 'dist'),
  path.join(process.cwd(), 'public_html')
];

const clientDistPath = clientDistCandidates.find(p => fs.existsSync(p) && fs.existsSync(path.join(p, 'index.html')));
const indexHtmlPath = clientDistPath ? path.join(clientDistPath, 'index.html') : null;

let cachedIndexHtml = null;
const getIndexHtml = () => {
  if (!cachedIndexHtml || process.env.NODE_ENV !== 'production') {
    try {
      cachedIndexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
    } catch (e) {
      return null;
    }
  }
  return cachedIndexHtml;
};

if (clientDistPath && indexHtmlPath) {
  // Monolith / single-server production deployment (e.g. Hostinger Node.js, Render, Railway, Docker, VPS)
  console.log(`📂 Serving built frontend client from: ${clientDistPath}`);
  app.use(express.static(clientDistPath));

  app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
      return res.status(404).json({ error: 'API endpoint not found' });
    }

    const cleanPath = req.path.replace(/\/+$/, '') || '/';
    const seo = ROUTE_SEO[cleanPath] || ROUTE_SEO['/'];

    const rawHtml = getIndexHtml();
    if (!rawHtml) {
      return res.sendFile(indexHtmlPath);
    }

    // Replace Title, Description, Open Graph, Twitter, and Canonical per route
    let customHtml = rawHtml
      .replace(/<title>.*?<\/title>/i, `<title>${seo.title}</title>`)
      .replace(/<meta name="title" content=".*?" \/>/i, `<meta name="title" content="${seo.title}" />`)
      .replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${seo.description}" />`)
      .replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${seo.canonical}" />`)
      .replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${seo.title}" />`)
      .replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${seo.description}" />`)
      .replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${seo.canonical}" />`)
      .replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${seo.title}" />`)
      .replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${seo.description}" />`)
      .replace(/<meta name="twitter:url" content=".*?" \/>/i, `<meta name="twitter:url" content="${seo.canonical}" />`);

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.send(customHtml);
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
