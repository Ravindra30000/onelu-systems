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

Single-page marketing site for **OneLU** — a dark-themed (bg: `#0A0E17`) Next.js 16 app using the App Router.

**Key tech:**
- **Next.js 16.2.1** with App Router (`src/app/`)
- **Tailwind CSS v4** — configured via `@theme inline` in `globals.css`, NOT `tailwind.config.js`. Custom brand tokens: `onelu-blue`, `onelu-red`, `onelu-orange`, `onelu-bg`, `onelu-surface`, `onelu-border`.
- **Framer Motion 12** for animations
- **Nodemailer 8** for the contact form API route (`src/app/api/contact/route.ts`)

**Page structure (`src/app/page.tsx`):** Assembles section components in order — `Navbar → Hero → WhatWeDo → Products → Philosophy → Capabilities → GlobalReach → Footer` — with `ContactModal` as a global overlay triggered from Navbar/Hero.

**Environment variables required for email:**
```
EMAIL_USER=<gmail address>
EMAIL_PASS=<app password>
```

**Client vs Server components:** All components under `src/components/` that use hooks or Framer Motion are `"use client"`. The App Router layout and API routes are server-side.
