# 🚀 Live Production Deployment Guide: Just Like Home Nursery

This guide walks you through connecting your backend and database for live production deployment.

---

## 📋 Architecture Overview

The application is structured into two parts:
- **`server/`**: Express REST API + MongoDB Mongoose layer with resilient in-memory fallback.
- **`client/`**: React + Vite frontend with Three.js WebGL hero doll, interactive claymorphic UI, tour booking, and admin management.

You can deploy the app using:
- **Hostinger** (Cloud/Business with hPanel Node.js, VPS with PM2, or Shared Web Hosting)
- **Render / Railway** (All-in-one cloud service)
- **Vercel + Render** (Decoupled frontend & backend)

---

## 🗄️ Step 1: Set Up MongoDB Atlas (Cloud Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign in or create a free account.
2. Create a new database cluster (e.g. **M0 Free Tier**).
3. Under **Security → Database Access**:
   - Click **Add New Database User**.
   - Choose **Password** authentication.
   - Enter a username (e.g., `jlh_admin`) and secure password.
   - Set privileges to **Read and write to any database**.
4. Under **Security → Network Access**:
   - Click **Add IP Address**.
   - Click **Allow Access from Anywhere** (`0.0.0.0/0`) so cloud servers can connect.
   - Click **Confirm**.
5. Under **Deployments → Database → Connect**:
   - Select **Drivers** (Node.js).
   - Copy your connection string:
     ```bash
     mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/jlh_nursery?retryWrites=true&w=majority
     ```
   - Replace `<username>` and `<password>` with your database user credentials.

---

## 🟣 Deploying on Hostinger

Hostinger supports Node.js applications across its hosting plans. Choose the guide matching your Hostinger plan:

### Method 1: Hostinger Cloud / Business Hosting (hPanel Node.js App Manager)

Hostinger's Business and Cloud Web Hosting plans include a built-in **Node.js** manager in hPanel.

1. **Build the Client Locally**:
   ```bash
   npm run build --prefix client
   ```
   *(This outputs the optimized frontend into `client/dist`, including `.htaccess` for SPA URL routing).*

2. **Upload Files via Git or File Manager**:
   - In Hostinger **hPanel** → Go to **Files → File Manager** (or use **Advanced → Git**).
   - Upload the project files into your domain directory (e.g., `/home/uXXXX/domains/jlhnursery.ae/`).
   - Ensure the structure contains:
     - `server/` (including `server/server.js`, `server/package.json`)
     - `client/dist/` (the built frontend folder)
     - `package.json`

3. **Configure Node.js in hPanel**:
   - In hPanel, search for **Node.js** in the search bar.
   - Click **Create Application**:
     - **Node.js Version**: Select `v18.x` or `v20.x`.
     - **Application Mode**: `Production`.
     - **Application Root**: Path to your project folder (e.g. `public_html` or domain root).
     - **Application Startup File**: `app.js` (or `server/server.js`).
   - Under **Environment Variables**, add:
     - `NODE_ENV`: `production`
     - `PORT`: `5000` (or leave Hostinger's assigned port)
     - `MONGODB_URI`: `mongodb+srv://<user>:<password>@cluster0.../jlh_nursery?retryWrites=true&w=majority`
     - `CORS_ORIGIN`: `*` (or your domain `https://jlhnursery.ae`)
   - Click **Save / Create**.

4. **Install Server Dependencies**:
   - In the Node.js panel, click **Run NPM Install** or open the **Terminal / SSH** in hPanel:
     ```bash
     cd server
     npm install --production
     ```

5. **Start / Restart Application**:
   - Click **Restart** on the Node.js application card.
   - Test by visiting `https://yourdomain.com/api/health`.

---

### Method 2: Hostinger VPS (Ubuntu with PM2 & Nginx - Most Popular for Production)

If you have a Hostinger VPS (KVM 1 / KVM 2 / CyberPanel):

1. **SSH into your Hostinger VPS**:
   ```bash
   ssh root@<YOUR_HOSTINGER_VPS_IP>
   ```

2. **Install Node.js 20 & PM2**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs nginx git
   sudo npm install -g pm2
   ```

3. **Clone and Build the Application**:
   ```bash
   cd /var/www
   git clone <YOUR_GIT_REPO_URL> jlh-nursery
   cd jlh-nursery
   npm install --prefix server
   npm install --prefix client
   npm run build --prefix client
   ```

4. **Configure Environment Variables**:
   Create `/var/www/jlh-nursery/server/.env`:
   ```bash
   nano server/.env
   ```
   Add:
   ```env
   PORT=5000
   NODE_ENV=production
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/jlh_nursery?retryWrites=true&w=majority
   CORS_ORIGIN=*
   ```

5. **Start with PM2 (Auto-Restart on Reboot)**:
   ```bash
   pm2 start server/server.js --name "jlh-nursery"
   pm2 startup
   pm2 save
   ```

6. **Configure Nginx Reverse Proxy**:
   Create `/etc/nginx/sites-available/jlhnursery`:
   ```nginx
   server {
       listen 80;
       server_name jlhnursery.ae www.jlhnursery.ae;

       location / {
           proxy_pass http://127.0.0.1:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   Enable site & reload Nginx:
   ```bash
   ln -s /etc/nginx/sites-available/jlhnursery /etc/nginx/sites-enabled/
   nginx -t
   systemctl restart nginx
   ```

7. **Install Free SSL (Certbot)**:
   ```bash
   sudo apt install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d jlhnursery.ae -d www.jlhnursery.ae
   ```

---

### Method 3: Hostinger Standard Shared Hosting (Static Frontend on Hostinger + Free Cloud API)

If your Hostinger plan is basic shared hosting (without Node.js access):

1. **Deploy the Backend to Render or Railway** (Free):
   - Follow the **Render** instructions below to host `server/server.js`.
   - Your backend URL will be e.g. `https://jlh-nursery-api.onrender.com`.

2. **Build Frontend with the Backend URL**:
   - In `client/`:
     ```bash
     # In client/.env.production
     VITE_API_URL=https://jlh-nursery-api.onrender.com
     ```
   - Run the build:
     ```bash
     npm run build --prefix client
     ```

3. **Upload to Hostinger `public_html`**:
   - Open Hostinger **File Manager** → go to `public_html`.
   - Upload all files from inside `client/dist/` into `public_html` (including `index.html`, `assets/`, and `.htaccess`).
   - The `.htaccess` file configured in `client/public/.htaccess` will automatically handle SPA routing so page reloads work smoothly.

---

## 🌐 Other Cloud Platforms

### Deploying on Render (render.com):
1. Create a new **Web Service** on Render and link your GitHub repository.
2. Configure settings:
   - **Environment**: `Node`
   - **Branch**: `main`
   - **Root Directory**: *(leave blank)*
   - **Build Command**: `npm run build:all`
   - **Start Command**: `npm start`
3. Add **Environment Variables**:
   | Variable | Value |
   |---|---|
   | `NODE_ENV` | `production` |
   | `PORT` | `10000` (or leave default, Render sets automatically) |
   | `MONGODB_URI` | `mongodb+srv://<user>:<password>@cluster0.../jlh_nursery?retryWrites=true&w=majority` |
   | `CORS_ORIGIN` | `*` (or your custom domain like `https://jlhnursery.ae`) |
4. Click **Create Web Service**.
   - Render will install dependencies, build the client bundle into `client/dist`, and launch `server/server.js`.
   - Your live website and backend will be accessible at `https://<your-subdomain>.onrender.com`.

---

## ⚡ Option 2: Decoupled Deployment (Vercel Frontend + Render Backend)

### Part A: Deploy Backend (Render or Railway)
1. In Render, select **Root Directory**: `server`.
2. Build Command: `npm install`
3. Start Command: `node server.js`
4. Set Environment Variables:
   - `MONGODB_URI`: your Atlas URI
   - `CORS_ORIGIN`: `https://<your-vercel-app>.vercel.app,https://jlhnursery.ae`
5. Note your backend URL: e.g. `https://jlh-nursery-api.onrender.com`.

### Part B: Deploy Frontend (Vercel)
1. Go to [Vercel](https://vercel.com) and import your Git repository.
2. Set **Root Directory** to `client`.
3. Framework Preset: `Vite`.
4. In **Environment Variables**, add:
   | Variable | Value |
   |---|---|
   | `VITE_API_URL` | `https://jlh-nursery-api.onrender.com` |
5. Deploy! Vercel will build the frontend and route all API calls to your live backend.

---

## 🩺 Step 3: Verify the Live Production Deployment

Once deployed, verify the endpoints:

1. **Health Check**:
   ```bash
   curl https://<your-backend-domain>/api/health
   ```
   Expected response:
   ```json
   {
     "status": "ok",
     "app": "Just Like Home Nursery API",
     "location": "Villa No. 47, Al Rashidiya 2, Ajman",
     "phone": "0502005346",
     "database": "MongoDB Connected",
     "timestamp": "2026-09-29T..."
   }
   ```

2. **Test Tour Booking**:
   Submit a test booking from the **Schedule a Visit** modal or test with `curl`:
   ```bash
   curl -X POST https://<your-backend-domain>/api/visits \
     -H "Content-Type: application/json" \
     -d '{"parentName":"Test Parent","phone":"0501234567","childAge":"3 years","preferredDate":"2026-10-15"}'
   ```

3. **Test Contact Enquiry**:
   Submit a test enquiry from the Contact section or test with `curl`:
   ```bash
   curl -X POST https://<your-backend-domain>/api/enquiries \
     -H "Content-Type: application/json" \
     -d '{"name":"Fatima","phone":"0551234567","message":"Test message from live site"}'
   ```

4. **Open Admin Portal**:
   - Click the **Admin Portal** button in the footer or visit the admin modal.
   - You should see the bookings and enquiries populated directly from MongoDB Atlas!
