# Preetham Raj Ramraj Portfolio

A minimal, dark, project-first personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` - Start the local development server
- `npm run build` - Create a production build
- `npm run start` - Run the production build locally
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript checks

## Content Updates

All portfolio content is stored in a single config file:

- `src/content/portfolio.ts`

This keeps the app easy to extend later with sections like Experience, Education, Certifications, or a Resume link.

## Structure

```text
src/
  app/
  components/
    portfolio/
    ui/
  content/
  lib/
```

## Deployment

This project is ready to deploy on Vercel or any platform that supports Next.js.
