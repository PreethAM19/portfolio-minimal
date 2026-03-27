# Preetham Raj Ramraj Portfolio

A premium, dark, motion-led personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- Next.js
- TypeScript
- React
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

Current content areas in the config:

- Hero
- Stack / Expertise
- Work Experience
- Selected Projects
- Education
- Certifications
- Contact

Some fields intentionally remain as placeholders where exact details were not provided yet, including the GitHub profile link, one recent experience entry, and a few certification or education titles.

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

This project is ready to deploy on Vercel and that is the best free option for this stack.

### Vercel deployment steps

1. Push the latest code to GitHub:

```bash
git add .
git commit -m "Prepare portfolio for deployment"
git push origin main
```

2. Go to [Vercel](https://vercel.com/) and sign in with GitHub.

3. Click `Add New...` -> `Project`.

4. Import this repository:

- `PreethAM19/portfolio-minimal`

5. Keep the default Vercel settings for Next.js:

- Framework Preset: `Next.js`
- Build Command: `npm run build`
- Output Directory: leave empty

6. Click `Deploy`.

7. After the first production deploy, copy your live URL. It will look like:

- `https://portfolio-minimal-xxxxx.vercel.app`

8. In Vercel project settings, add an environment variable so metadata and link previews use your real production URL:

- Name: `NEXT_PUBLIC_SITE_URL`
- Value: your production site URL, for example `https://portfolio-minimal-xxxxx.vercel.app`

9. Redeploy once after adding that variable.

### Optional shared view counter

The site includes a subtle shared view counter at the bottom of the contact section.

To enable it:

1. Create a Redis database in Upstash.
2. Copy the REST URL and REST token from Upstash.
3. Add these environment variables in Vercel:

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`
- `VIEW_COUNTER_KEY`

Example:

```bash
UPSTASH_REDIS_REST_URL=https://your-instance.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-token
VIEW_COUNTER_KEY=portfolio:views:preetham-raj.info
```

The counter increments once per browser session and hides itself automatically if the Redis variables are missing.

### Optional custom domain

If you later buy a custom domain, add it in:

- `Project` -> `Settings` -> `Domains`

Then update `NEXT_PUBLIC_SITE_URL` to that custom domain and redeploy.

### Best places to use the live link

- LinkedIn `Featured`
- LinkedIn `Contact Info`
- Resume header
- GitHub profile bio or pinned repo
- Email signature
