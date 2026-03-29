# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Run production build
npm run lint     # Run ESLint
```

## Architecture

Multi-page marketing site for **1 Lu Next Gen Technologies** — a light-themed (bg: `#F9FAFB`) Next.js 16 app using the App Router.

**Key tech:**
- **Next.js 16** with App Router (`src/app/`)
- **Tailwind CSS v4** — configured via `@theme inline` in `globals.css`, NOT `tailwind.config.js`. Brand tokens: `lu-blue` (#2B7FE8), `lu-coral` (#F05252), `lu-orange` (#F5A234), `lu-bg`, `lu-surface`, `lu-border`, `lu-text`, `lu-muted`.
- **Nodemailer 8** for two email API routes

**Pages:**
- `/` — Home: hero, services overview, DSC highlight, products (Sah Saathi & CopyDude), tech stack, workshops strip, FAQ, CTA
- `/about` — Company info, mission, values, tech stack, products, CTA
- `/services` — Detailed service pricing (web, app, logo, workshops)
- `/dsc-pricing` — DSC certificate pricing tables
- `/contact` — Contact form page

**Layout (`src/app/layout.tsx`):** Wraps all pages with `Navbar`, `Footer`, and `WhatsAppButton`.

**Shared components (`src/components/`):**
- `FAQSection`, `ContactForm`, `CallbackForm` — used within pages
- `ContactModal`, `WhatsAppButton`, `BrandWatermark` — global/utility UI

**API routes:**
- `POST /api/contact` — contact enquiry form → email via Gmail/Nodemailer (fields: name, email, phone, company, inquiryType, message)
- `POST /api/callback` — callback request → email (fields: name, phone, preferredTime)

**Environment variables required for email:**
```
EMAIL_USER=<gmail address>
EMAIL_PASS=<app password>
```

**Component rendering:** Pages and layout are server components. Components in `src/components/` that use hooks are `"use client"`.
