# Spike Tech Empire

The website for Spike Tech Empire, a Nairobi-based product engineering and technology partner. The site introduces the team’s services, showcases selected work, shares the founder’s approach, and makes it easy to start a conversation or book a call.

**Built with:** Next.js 14 · React 18 · TypeScript · Tailwind CSS

## What’s on the site

- Responsive homepage with service, project showcase, working approach, founder, and contact sections
- Dedicated About, Services, and Contact pages
- Calendly booking link for product architecture calls
- Email and WhatsApp contact links
- Locally hosted Geist fonts and founder portrait
- Vercel Web Analytics

## Getting started

### Requirements

- Node.js 18.17 or newer
- npm

### Install and run

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The development server supports hot reloading as you edit files.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run the Next.js ESLint command |

To check a production build locally:

```bash
npm run build
npm run start
```

## Project structure

```text
app/
  about/page.tsx       About page
  contact/page.tsx     Contact page
  services/page.tsx    Services page
  globals.css          Global styles and responsive design
  layout.tsx           Root layout, metadata, fonts, and analytics
  page.tsx              Homepage
components/             Shared UI components
public/                 Static assets, including logos and portraits
```

The main homepage content and its Calendly booking URL are in `app/page.tsx`. Global visual styles are in `app/globals.css`; page metadata and locally hosted fonts are configured in `app/layout.tsx`.

## Deployment

The project can be deployed to any platform that supports Next.js. To deploy with Vercel:

1. Import the repository into [Vercel](https://vercel.com/new).
2. Keep the standard Next.js build settings (`npm run build`).
3. Deploy. Vercel will build and publish the site.

For other hosting providers, follow the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
