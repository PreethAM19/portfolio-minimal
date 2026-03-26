# Portfolio Editing Guide

This project is a single-page Next.js portfolio with all personal content centralized in one file and the visual sections split into reusable components.

## 1. Architecture overview

- Framework: Next.js App Router
- Language: TypeScript
- Styling: Tailwind CSS with a small amount of custom CSS in `src/app/globals.css`
- Motion: Framer Motion
- Content source: `src/content/portfolio.ts`
- Public assets: `public/`

The page is assembled in `src/app/page.tsx`. Each portfolio section is its own component under `src/components/portfolio`.

## 2. File map

### App shell

- `src/app/layout.tsx`
  - Global HTML shell, metadata, and root layout.
- `src/app/page.tsx`
  - Puts the full homepage together in section order.
- `src/app/globals.css`
  - Theme tokens, base styling, ambient background layers, utility classes, and animation keyframes.

### Content

- `src/content/portfolio.ts`
  - Main source of truth for all editable personal content.
  - Edit this file for:
    - name
    - title
    - intro / bio
    - nav labels
    - hero focus tags
    - stack items
    - work experience
    - projects
    - education
    - certifications
    - contact links

### Portfolio sections

- `src/components/portfolio/SiteHeader.tsx`
  - Top navbar and resume button.
- `src/components/portfolio/HeroSection.tsx`
  - Name, title, bio, CTA buttons, focus tags, portrait layout.
- `src/components/portfolio/StackSection.tsx`
  - Stack section wrapper and heading.
- `src/components/portfolio/AnimatedStack.tsx`
  - Rotating highlight behavior and animated stack pills.
- `src/components/portfolio/ExperienceSection.tsx`
  - Timeline layout for work experience.
- `src/components/portfolio/ProjectsSection.tsx`
  - Selected projects section wrapper and grid.
- `src/components/portfolio/ProjectCard.tsx`
  - Individual project card layout, project visual panels, links, and stack tags.
- `src/components/portfolio/EducationSection.tsx`
  - Education timeline cards.
- `src/components/portfolio/CertificationsSection.tsx`
  - Certification cards.
- `src/components/portfolio/ContactSection.tsx`
  - Final contact section.
- `src/components/portfolio/AmbientBackground.tsx`
  - Background motion and ambient visual layers.

### Shared UI building blocks

- `src/components/ui/Container.tsx`
  - Shared page width container.
- `src/components/ui/InteractiveSurface.tsx`
  - Pointer-reactive surface wrapper used by cards.
- `src/components/ui/SectionHeading.tsx`
  - Shared eyebrow, title, description block.
- `src/components/ui/Tag.tsx`
  - Pill tags used across hero, stack, and projects.
- `src/components/ui/motion.tsx`
  - Shared motion helpers like fades, stagger reveals, and text reveal.

### Assets

- `public/preetham-portrait.png`
  - Hero portrait.
- `public/resume_PR26.pdf`
  - Resume PDF linked from the header and hero.

### Scripts

- `scripts/clean-next.mjs`
  - Clears generated `.next` output before dev/build to avoid the Windows + OneDrive diagnostics issue.

## 3. Where to edit what

### Change personal content

Edit `src/content/portfolio.ts`.

- Hero name lines:
  - `portfolioData.hero.lines`
- Hero bio:
  - `portfolioData.person.intro`
- Hero focus tags:
  - `portfolioData.hero.focus`
- Resume button target:
  - `portfolioData.hero.secondaryAction.href`
- Stack pills:
  - `portfolioData.stack.items`
- Work experience entries:
  - `portfolioData.experience.items`
- Projects:
  - `portfolioData.projects.items`
- Education:
  - `portfolioData.education.items`
- Certifications:
  - `portfolioData.certifications.items`
- Contact links:
  - `portfolioData.contact.links`

## 4. Layout edits

### Hero sizing or spacing

Edit `src/components/portfolio/HeroSection.tsx`.

Common things to change there:

- Left and right column proportions:
  - the top-level grid classes
- Name size:
  - the `RevealText` `className`
- Bio width:
  - the paragraph max-width classes
- Focus box size:
  - the first `InteractiveSurface`
- Portrait size:
  - the second `InteractiveSurface`
  - the inner image wrapper aspect / height classes

### Project card layout

Edit `src/components/portfolio/ProjectCard.tsx`.

Common things to change there:

- Card padding and height
- Visual area height
- Title size
- Description spacing
- Stack tag spacing
- Button row placement

### Project visuals

Edit `src/components/portfolio/ProjectCard.tsx`, inside `ProjectVisual`.

Each project visual is generated in code based on `project.visual`:

- `visitor`
- `sniffi`
- `voice`

If you want to replace these with real images later:

1. Put the image files in `public/`
2. Add an `image` field in `src/content/portfolio.ts`
3. Swap the visual block in `ProjectCard.tsx` to a `next/image` render

### Section spacing

Most section vertical spacing is controlled in each section component with classes like:

- `py-20`
- `sm:py-24`
- `lg:py-28`

If a section feels too tall or too tight, edit the specific section file rather than global CSS first.

## 5. Styling and motion

### Global theme

Edit `src/app/globals.css` for:

- background gradients
- grid background
- global colors
- utility classes like `.ambient-ring`
- keyframes such as shimmer and pulse

### Motion utilities

Edit `src/components/ui/motion.tsx` for:

- fade timings
- reveal timings
- stagger behavior
- page reveal behavior

### Pointer-reactive effects

Edit `src/components/ui/InteractiveSurface.tsx`.

This is where the hover glow / reactive surface behavior lives. If cards feel too reactive or not reactive enough, update it there once and it will affect most major surfaces.

## 6. How to add or remove sections

Edit `src/app/page.tsx`.

That file controls:

- section order
- which sections are rendered
- whether a section is temporarily removed

If you add a new section later, also update:

- `src/content/portfolio.ts`
- `src/components/portfolio/YourNewSection.tsx`
- `portfolioData.navigation` if it should appear in the navbar

## 7. How to update portrait or resume

### Portrait

Replace:

- `public/preetham-portrait.png`

If you use a different filename, also update:

- `portfolioData.hero.photo.src` in `src/content/portfolio.ts`

### Resume PDF

Replace:

- `public/resume_PR26.pdf`

If you rename it, update both:

- `portfolioData.hero.secondaryAction.href`
- `src/components/portfolio/SiteHeader.tsx`

## 8. Commands

- Install: `npm install`
- Dev: `npm run dev`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Production build: `npm run build`

This project already includes a small `.next` cleanup step before dev/build to avoid the Windows + OneDrive diagnostics issue.

## 9. Best editing workflow

For most updates:

1. Change content in `src/content/portfolio.ts`
2. If the layout needs adjustment, edit the relevant section component
3. Run `npm run build`
4. Review visually in `npm run dev`

Use component edits only when the content file is not enough. Most personal updates should stay in the content file.
