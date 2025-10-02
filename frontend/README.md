# Portfolio Frontend

Modern, responsive portfolio website built with React, TypeScript, and TailwindCSS.

## Features

- 🎨 Beautiful, modern UI with TailwindCSS and shadcn/ui components
- ⚡ Fast and optimized with Vite
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🌙 Dark mode support
- 📧 Contact form with validation
- 🎯 SEO optimized
- ♿ Accessible

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Forms**: React Hook Form
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Update `.env` with your configuration:
```env
VITE_API_URL=http://localhost:5000/api
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # Base UI components (Button, Card, etc.)
│   │   └── layout/      # Layout components (Navbar, Footer)
│   ├── pages/           # Page components
│   ├── services/        # API services
│   ├── lib/             # Utilities and helpers
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # TailwindCSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json
```

## Available Routes

- `/` - Home page with hero, skills, experience, and featured projects
- `/projects` - All projects with category filtering
- `/projects/:id` - Individual project details
- `/contact` - Contact form

## Customization

### Colors

Update theme colors in `src/index.css`:
```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  /* ... more colors */
}
```

### Content

Replace the placeholder content with your own:
- Update personal information in components
- Add your projects via the API
- Customize the hero section in `HomePage.tsx`

## Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the dist folder to Netlify
```

### Other Platforms

Build the project and serve the `dist` directory with any static hosting service.

## Environment Variables

- `VITE_API_URL` - Backend API URL

## License

MIT

## Author

Ammar Ahmed - [GitHub](https://github.com/ZERO2ED)
