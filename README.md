# EZakay Website

A modern Next.js website for EZakay - Modern Transport for Filipinos. This website features a dark theme inspired by the EZakay Admin app design.

## Features

- 🎨 Dark theme with purple/blue backgrounds and green accents
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and React
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling
- 🎭 Lucide React icons

## Theme Colors

- **Dark Purple Background**: `#272758`
- **Dark Card Background**: `#252547`
- **Accent Green**: `#6FAB75` (buttons, icons)
- **Accent Red**: `#EF4444` (for "E" in logo)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
ezakay-site/
├── app/
│   ├── layout.tsx          # Root layout with Header and Footer
│   ├── page.tsx             # Home page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── features/
│   │   └── page.tsx         # Features page
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   ├── get-started/
│   │   └── page.tsx         # Get Started page
│   ├── download/
│   │   └── page.tsx         # Download page
│   ├── learn-more/
│   │   └── page.tsx         # Learn More page
│   └── globals.css          # Global styles
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer component
│   ├── Logo.tsx             # Logo component
│   └── MobileMenu.tsx       # Mobile navigation menu
├── public/
│   └── images/              # Static images
└── package.json
```

## Pages

- **Home** (`/`) - Hero section, about preview, and features overview
- **About** (`/about`) - Detailed information about EZakay and team
- **Features** (`/features`) - Comprehensive feature list for all app types
- **Contact** (`/contact`) - Contact information
- **Get Started** (`/get-started`) - Call to action page
- **Download** (`/download`) - Download links for Android and iOS
- **Learn More** (`/learn-more`) - Mission, vision, and how it works

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Framer Motion** - Animation library (installed but can be used for animations)

## Customization

### Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  'dark-purple': '#272758',
  'dark-card': '#252547',
  'accent-green': '#6FAB75',
  'accent-red': '#EF4444',
}
```

### Fonts

The website uses:
- **Poppins** - Main font (body text)
- **Space Grotesk** - Logo font

Fonts are loaded from Google Fonts in `app/globals.css`.

## License

© 2025 EZakay. All rights reserved.

