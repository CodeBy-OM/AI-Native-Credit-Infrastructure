# Vitto — AI-Native Digital Credit Infrastructure

> Full-stack submission for the Vitto Full Stack Intern Assignment

---

## 🏗️ Project Structure

```
vitto/
├── frontend/          # React.js application
│   ├── src/
│   │   ├── components/   # Navbar, Footer
│   │   ├── pages/        # All 9 pages
│   │   └── styles/       # Global CSS design system
│   └── package.json
│
└── backend/           # Node.js + Express API
    ├── db/
    │   ├── postgres.js   # PostgreSQL connection + migrations
    │   └── mongo.js      # MongoDB + OTP session model (TTL)
    ├── middleware/
    │   ├── auth.js        # JWT middleware
    │   └── validators.js  # express-validator rules
    ├── routes/
    │   ├── auth.js        # POST /api/auth/send-otp, verify-otp
    │   ├── leads.js       # POST /api/leads, GET /api/leads/:id
    │   └── contact.js     # POST /api/contact
    ├── server.js          # Express app entry point
    ├── .env.example
    └── Vitto_API.postman_collection.json
```

---

## 📄 Deliverables Completed

| # | Deliverable | Status |
|---|-------------|--------|
| 1 | Website Sitemap (9 pages with audience + conversion goals) | ✅ |
| 2 | Homepage — all 8 sections (Hero, Problems, Solution, Modules, Impact, Social Proof, CTA, Footer) | ✅ |
| 3 | AI-First Platform Page — all 6 modules with deep technical copy + Agentic AI SLM section | ✅ |
| 4 | Full-Stack Automation Page — 5 layers, 29+ modules, interactive layer navigator | ✅ |
| 5 | Thought Leadership Article — "Retrofit AI vs AI-Native Infrastructure in BFSI" | ✅ |
| 6 | Self Sign-Up Flow — 3-step form with OTP + backend APIs + PostgreSQL + MongoDB | ✅ |
| Bonus | Visual diagram (AI lifecycle), thought leadership article embedded in site | ✅ |

---

## 🚀 Running Locally

### Prerequisites
- Node.js 18+
- PostgreSQL 14+ (optional — graceful fallback to in-memory)
- MongoDB 6+ (optional — graceful fallback to in-memory)

### Frontend

```bash
cd frontend
npm install
cp .env.example .env        # optional — defaults to localhost:4000
npm start
# Opens at http://localhost:3000
```

### Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your DB credentials
node server.js
# Runs at http://localhost:4000
```

> **Note:** The server starts and runs without databases connected. OTP sessions fall back to in-memory, leads fall back to in-memory. All API endpoints remain functional.

### Environment Variables

**Frontend** (`frontend/.env`):
```
REACT_APP_API_URL=http://localhost:4000
```

**Backend** (`backend/.env`):
```
PORT=4000
NODE_ENV=development
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=vitto_db
PG_USER=postgres
PG_PASSWORD=yourpassword
MONGO_URI=mongodb://localhost:27017/vitto_sessions
JWT_SECRET=your_secret_key
```

---

## 🗃️ Database Schema

### PostgreSQL — `leads` table

```sql
CREATE TABLE leads (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email           VARCHAR(255),
  phone           VARCHAR(20),
  institution_name VARCHAR(255) NOT NULL,
  institution_type VARCHAR(100),
  city            VARCHAR(100),
  loan_book_size  VARCHAR(100),
  status          VARCHAR(50) DEFAULT 'pending',
  created_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### PostgreSQL — `contacts` table

```sql
CREATE TABLE contacts (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        VARCHAR(255) NOT NULL,
  email       VARCHAR(255),
  phone       VARCHAR(20),
  institution VARCHAR(255),
  role        VARCHAR(100),
  message     TEXT,
  created_at  TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### MongoDB — `OtpSession` collection

```js
{
  identifier: String,     // email or phone
  otp: String,            // 6-digit code
  attempts: Number,       // max 5
  createdAt: Date,        // TTL index: expires after 600 seconds (10 min)
}
```

---

## 🔌 API Endpoints

### POST `/api/auth/send-otp`
Generate and store a mock OTP for email or phone.

```json
// Request
{ "email": "cto@aavas.in" }

// Response 200
{
  "success": true,
  "message": "OTP sent to email",
  "otp": "482931",          // dev only
  "expiresIn": "10 minutes"
}
```

### POST `/api/auth/verify-otp`
Validate OTP and return a JWT session token.

```json
// Request
{ "email": "cto@aavas.in", "otp": "482931" }

// Response 200
{
  "success": true,
  "token": "eyJhbGci...",
  "expiresIn": "7 days"
}
```

### POST `/api/leads` _(requires Bearer token)_
Save institution registration details.

```json
// Request headers: Authorization: Bearer <token>
// Request body
{
  "email": "cto@aavas.in",
  "phone": "+919876543210",
  "institution_name": "Aavas Financiers",
  "institution_type": "Housing Finance Company",
  "city": "Jaipur",
  "loan_book_size": "₹1,000–5,000 Cr"
}

// Response 201
{
  "success": true,
  "message": "Registration successful. Our team will reach out within 24 hours.",
  "id": "uuid-here",
  "lead": { ... }
}
```

### GET `/api/leads/:id` _(requires Bearer token)_
Retrieve a lead record.

```json
// Response 200
{
  "success": true,
  "lead": {
    "id": "uuid",
    "institution_name": "Aavas Financiers",
    "status": "pending",
    "created_at": "2025-01-15T08:30:00Z"
  }
}
```

### POST `/api/contact`
Submit a demo request (no auth required).

```json
// Request
{
  "name": "Rajesh Menon",
  "email": "rajesh@aavas.in",
  "institution": "Aavas Financiers",
  "role": "CRO / Head of Credit",
  "message": "Interested in MSME underwriting automation."
}
```

---

## 🧪 Testing with curl

```bash
# 1. Send OTP
curl -X POST http://localhost:4000/api/auth/send-otp \
  -H "Content-Type: application/json" \
  -d '{"email":"test@nbfc.com"}'

# 2. Verify OTP (use OTP from step 1 response)
curl -X POST http://localhost:4000/api/auth/verify-otp \
  -H "Content-Type: application/json" \
  -d '{"email":"test@nbfc.com","otp":"XXXXXX"}'

# 3. Create Lead (use token from step 2)
curl -X POST http://localhost:4000/api/leads \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "email":"test@nbfc.com",
    "institution_name":"TestNBFC",
    "institution_type":"NBFC",
    "city":"Mumbai",
    "loan_book_size":"₹250–1,000 Cr"
  }'

# 4. Get Lead by ID
curl http://localhost:4000/api/leads/YOUR_LEAD_UUID \
  -H "Authorization: Bearer YOUR_TOKEN"
```

---

## 🗺️ Sitemap

| Page | Audience | Conversion Goal |
|------|----------|-----------------|
| Homepage `/` | CTO, CRO, Digital Transformation Lead | Book Demo |
| AI Platform `/platform` | CTO, Head of Credit | Read depth, request demo |
| Automation `/automation` | Operations Head, CTO | Understand full coverage |
| Collections `/collections` | Head of Collections, CRO | Request collections demo |
| Agentic AI `/agentic-ai` | CTO, Digital Transformation Lead | Book demo |
| API Infrastructure `/api-infrastructure` | CTO, Engineering Lead | Get API access, sign up |
| About `/about` | All — validation stage | Build trust, explore |
| Contact `/contact` | All — decision stage | Submit demo request |
| Sign Up `/signup` | All — conversion stage | Complete registration |

---

## 🎨 Design Decisions

**Palette:** Dark navy (`#0D0D1A`) + red (`#D32F2F`) as specified. Dark backgrounds communicate infrastructure gravity; the red accent draws attention to CTAs and key metrics without visual noise.

**Typography:** Syne (display) + DM Sans (body). Syne is authoritative and modern without being playful — appropriate for institutional B2B. DM Sans is clean and readable at small sizes for dense technical copy.

**Copy principle:** Wrote as an experienced credit professional explaining to a peer — not as a marketer explaining to a consumer. Technical specificity (p99 latency, DPD buckets, propensity-to-pay) establishes credibility with the CTO/CRO audience.

**Architecture:** Graceful degradation when databases are unavailable — all endpoints return valid responses using in-memory fallbacks. This allows evaluation without infrastructure setup.

---

## 💡 One Positioning Statement

> "A traditional LOS is a transaction system. Vitto is a decisioning system."

---

## 🔄 What I'd Do With More Time

1. Add real email/SMS OTP delivery (SendGrid + MSG91)
2. Implement a full admin dashboard for lead management
3. Add the visual AI lifecycle diagram as an interactive SVG React component
4. Write unit + integration tests for all API endpoints (Jest + Supertest)
5. Set up CI/CD pipeline with GitHub Actions

---

*Vitto Technologies Pvt. Ltd. — Confidential*
