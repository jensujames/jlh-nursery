# Just Like Home Nursery - MERN Platform 🏡✨

> **"Where Little Hearts Feel at Home."**  
> Luxury, production-ready MERN web application for **Just Like Home Nursery**, Villa No. 47, Al Rashidiya 2, Ajman, UAE.

---

## 🌟 Overview & Key Features

- **Royal Maroon & White Luxury Design System**: Tailored aesthetic with deep nursery maroon (`#7B1127`), warm ivory/cream (`#FDFBF7`), champagne gold accents (`#D4AF37`), and crisp white elevations.
- **Buttery Smooth Scroll Animations & Micro-Interactions**: Ambient gradients, floating animated trust badges, interactive accordions, and celebration confetti.
- **British EYFS Curriculum Framework**: In-depth interactive showcase of all 7 Early Years Foundation Stage areas of learning and daily activities.
- **6 Tailored Age & Care Programs**: Early Explorers, Curious Learners, Confident Preschoolers, School-Ready Learners, Flexible Full-Day / Half-Day Care, and Holiday/Summer Camps.
- **Interactive Admissions & Schedule Matcher**: Parents select age and schedule to get immediate class matching and guidance.
- **Interactive Facilities Showcase**: Classrooms, shaded outdoor garden, indoor play gym, quiet baby room, first-aid clinic, doctor visits, and 24/7 CCTV monitoring.
- **High-Definition Visual Gallery**: Filterable photo gallery with category pills and lightbox image zoom.
- **Parent Resources & Early Years Blog**: 6 in-depth guides with clean reading modals.
- **Dual Direct Communication Integrations**:
  - **Click-to-Call**: Direct dialer to `050 200 5346`.
  - **WhatsApp Live Chat**: Pre-filled intelligent inquiry messages to `+971 50 200 5346`.
- **Full RESTful Backend API**:
  - `POST /api/visits` — Book a guided nursery tour.
  - `GET /api/visits` — Retrieve submissions with real-time status filtering.
  - `PATCH /api/visits/:id/status` — Confirm or mark visits completed.
  - `POST /api/enquiries` — Direct contact messages.
  - `GET /api/enquiries` — Retrieve contact inquiries.
  - `GET /api/health` — System status and location verification.
- **Dual Persistence Strategy**: Automatically connects to MongoDB when `MONGODB_URI` is provided; automatically falls back to a high-speed resilient in-memory store so the app runs smoothly in any environment out-of-the-box.
- **Admissions Staff Hub**: Built-in modal viewer for nursery staff to review, search, and update submissions in real-time.

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

### 2. Install Dependencies
```bash
# Install server & client dependencies in one command
npm run install:all
```

### 3. Run Locally

#### Option A: Run Full Production Server
```bash
npm run build
npm start
```
Open **[http://localhost:5000](http://localhost:5000)** in your browser.

#### Option B: Run in Development Mode
```bash
# Terminal 1 - Backend Server
npm run server

# Terminal 2 - Frontend Vite Dev Server
npm run client
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser. (API calls are automatically proxied to port 5000).

---

## 🐳 Docker & Production Deployment

### One-Click Docker Compose
```bash
docker-compose up -d --build
```
This launches both the Node.js application (Port 5000) and MongoDB (Port 27017).

---

## 📍 Nursery Contact Details
- **Company Name**: Just Like Home Nursery
- **Address**: Villa No. 47, Al Rashidiya 2, Ajman, United Arab Emirates
- **Phone / WhatsApp**: 050 200 5346
- **Email**: nurseryjustlikehome@gmail.com
- **Hours**: Monday to Friday: 7:30 AM – 5:30 PM | Saturday: By Appointment
