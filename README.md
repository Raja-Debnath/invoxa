# Invoxa — Production-Grade Invoicing API

> Building in public. A solo backend engineering project documenting real-world API development from scratch.

[![Node.js](https://img.shields.io/badge/Node.js-v24-green)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-v5-black)](https://expressjs.com)
[![Prisma](https://img.shields.io/badge/Prisma-v7-blue)](https://prisma.io)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-NeonDB-blue)](https://neon.tech)
[![License](https://img.shields.io/badge/License-ISC-yellow)](LICENSE)

---

## What is Invoxa?

Invoxa is a backend REST API for invoice and billing management. It is designed for freelancers, small agencies, and businesses that need to manage clients, raise invoices, track payments, and generate PDF bills.

This is not a tutorial project. It is a real product built to production standards — with authentication, multi-tenancy, testing, CI/CD, and deployment. Every decision is documented. Every module is built to be maintainable, scalable, and defensible in a code review.

---

## Why I am building this in public

I am a self-taught backend developer from Mumbai, India. I built and currently maintain [DebnathOps](/) — a private internal tool running for two family businesses. This project is my public proof of work.

My goal is to demonstrate that I can build production-grade backend systems from scratch — not just follow tutorials. Every commit, every PR, every design decision is documented here.

---

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Runtime | Node.js v24 | JavaScript runtime |
| Framework | Express.js v5 | HTTP server and routing |
| Database | PostgreSQL (NeonDB) | Primary data store |
| ORM | Prisma v7 | Database access and migrations |
| Auth | JWT + bcrypt | Authentication and password security |
| Validation | Zod | Request validation and type safety |
| PDF | Puppeteer | Invoice PDF generation |
| Email | Nodemailer + Mailtrap | Transactional email |
| Cache | Redis | Rate limiting and caching |
| Testing | Jest + Supertest | Unit and integration tests |
| Docs | Swagger / OpenAPI | API documentation |
| CI/CD | GitHub Actions | Automated testing and deployment |
| Container | Docker | Containerization |
| Deployment | Railway | Cloud hosting |
| Logging | Winston | Structured production logging |

---

## Current Build Status

> **Phase 2 — Authentication** — In Progress

| Phase | Module | Status |
|---|---|---|
| Phase 1 | Project Setup — Express, folder structure, environment config, health check | ✅ Complete |
| Phase 2 | Authentication — JWT, bcrypt, refresh tokens, auth middleware | 🔄 In Progress |
| Phase 3 | Client Management — CRUD operations | ⏳ Pending |
| Phase 4 | Invoice Management — line items, tax, status | ⏳ Pending |
| Phase 5 | Payment Tracking — partial payments, balance calculation | ⏳ Pending |
| Phase 6 | PDF Generation — invoice PDF with Puppeteer | ⏳ Pending |
| Phase 7 | Email Notifications — invoice events, overdue reminders | ⏳ Pending |
| Phase 8 | Dashboard and Reports — revenue, overdue, top clients | ⏳ Pending |
| Phase 9 | Redis — rate limiting and caching | ⏳ Pending |
| Phase 10 | Testing — Jest and Supertest full coverage | ⏳ Pending |
| Phase 11 | API Documentation — Swagger / OpenAPI | ⏳ Pending |
| Phase 12 | CI/CD — GitHub Actions pipeline | ⏳ Pending |
| Phase 13 | Docker and Deployment — Railway | ⏳ Pending |
| Phase 14 | Monitoring and Logging — Winston structured logs | ⏳ Pending |
| Phase 15 | Scaling and System Design | ⏳ Pending |
| Phase 16 | Live Production Maintenance | ⏳ Pending |

---

## API Endpoints

### Currently Available

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| GET | /api/health | Health check | None |
| POST | /api/auth/register | Register new user | None |
| POST | /api/auth/login | Login user | None |

### Coming Soon - I'll later add Postman.json 

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/refresh | Refresh access token |
| POST | /api/auth/logout | Logout user |
| GET | /api/clients | List all clients |
| POST | /api/clients | Create client |
| GET | /api/invoices | List all invoices |
| POST | /api/invoices | Create invoice |
| POST | /api/payments | Record payment |
| GET | /api/invoices/:id/pdf | Download invoice PDF |

---

## Data Model

```
User
 ├── has many Clients
 ├── has many Invoices
 └── has many RefreshTokens

Client
 └── has many Invoices

Invoice
 ├── has many InvoiceItems
 └── has many Payments
```

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- PostgreSQL database (NeonDB free tier works)
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/Raja-Debnath/invoxa.git
cd invoxa
```

Install dependencies:

```bash
npm install
```

Set up environment variables:

```bash
cp .env.example .env
```

Fill in your `.env` file:

```
PORT=3000
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
```

Run database migrations:

```bash
npx prisma migrate deploy
```

Start the development server:

```bash
npm run dev
```

Server runs at `http://localhost:3000`

Health check: `GET http://localhost:3000/api/health`

---

## Project Structure

```
invoxa/
├── src/
│   ├── config/          # Environment and database config
│   ├── controllers/     # HTTP request handlers
│   ├── services/        # Business logic
│   ├── routes/          # Route definitions
│   ├── middleware/       # Auth, error handling, validation
│   ├── utils/           # Helper functions
│   └── app.js           # Express app setup
├── prisma/
│   ├── schema.prisma    # Database schema
│   └── migrations/      # Migration history
├── prisma.config.ts     # Prisma configuration
├── server.js            # Entry point
├── .env.example         # Environment template
└── README.md
```

---

## Git Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

| Type | When used |
|---|---|
| `feat` | New feature or endpoint |
| `fix` | Bug fix |
| `chore` | Setup, config, dependencies |
| `refactor` | Code restructure without behaviour change |
| `docs` | README, comments, documentation |
| `test` | Adding or fixing tests |

Example commit messages:
```
feat: add user registration with bcrypt password hashing
fix: handle duplicate email with 409 conflict response
chore: upgrade prisma to v7 and update config
docs: update README with current build status
test: add integration tests for auth endpoints
```

---

## Building in Public — Follow the Journey

I document every phase of this build publicly. If you are a self-taught developer learning backend engineering this repository shows the real process — including mistakes, debugging sessions, and design decisions.

- **GitHub** — [Raja-Debnath](https://github.com/Raja-Debnath)
- **LinkedIn** — [Raja Debnath](https://linkedin.com/in/Raja-Debnath)

---

## License

ISC — see [LICENSE](LICENSE) for details.

---

*Built with discipline. Documented with honesty. Shipped with purpose.*