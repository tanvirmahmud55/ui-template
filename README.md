# AuraUI — Modern Clean UI Template

A curated collection of modern, production-ready UI templates and components built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

Designed for high performance, accessibility, and sleek aesthetic standards with a flicker-free dark mode toggle out of the box.

---

## ✨ Features

- ⚡ **Next.js 16 & Turbopack**: High-speed development compilation and optimized static prerendering.
- 🎨 **Tailwind CSS v4**: Zero-configuration modern CSS engine with native CSS custom properties.
- 🌓 **Flicker-free Dark Mode**: Built with `next-themes` and hydration-safe rendering (Light, Dark, and System modes).
- 📱 **Fully Responsive Navigation**: Glassmorphic sticky navbar with mobile drawer navigation, quick search trigger, GitHub star pill, and theme toggle.
- 🚀 **High-Impact Hero Section**: Gradient headline typography, announcement pill, interactive preview dashboard mockup, and copyable terminal command.
- 🗂️ **Categorized Feature Cards**: 6 modular feature cards with accent gradient icons, category filtering, subtle hover elevation, and micro-interactions.
- 🧩 **Interactive Component Showcase**: Live stateful micro-actions, slider controls, and alert toast simulation.
- 📊 **Performance Metrics Strip**: Showcase social proof and key performance indicators.
- ❓ **Collapsible FAQ Accordion**: Interactive questions and answers.
- 📬 **High-Converting Call to Action**: Email subscription form with instant feedback and guarantee badges.
- 🧭 **Comprehensive Footer**: Multi-column navigation links, social icons, and real-time operational status pill.

---

## 📁 Project Structure

```
ui-template/
├── src/
│   ├── app/
│   │   ├── favicon.ico         # App favicon
│   │   ├── globals.css         # Tailwind v4 configuration & theme tokens
│   │   ├── layout.tsx          # Root layout with ThemeProvider and Geist font
│   │   └── page.tsx            # Main landing page assembling all components
│   └── components/
│       ├── navbar.tsx          # Responsive navigation bar with mobile drawer
│       ├── hero.tsx            # Hero section with interactive dashboard preview
│       ├── features.tsx        # Responsive feature cards with category filter
│       ├── showcase.tsx        # Bento-grid interactive component showcase
│       ├── stats.tsx           # Performance metrics & social proof
│       ├── faq.tsx             # Collapsible FAQ accordion
│       ├── cta.tsx             # Call to Action banner with email capture
│       ├── footer.tsx          # Multi-column footer with social links & status
│       ├── theme-provider.tsx  # Next-themes client wrapper
│       ├── theme-toggle.tsx    # Light/Dark/System theme switch dropdown
│       └── icons.tsx           # Clean vector brand icons (GitHub, X, Discord, LinkedIn)
├── public/                     # Static assets
├── eslint.config.mjs           # ESLint 9 configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript strict configuration
└── README.md                   # Documentation
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

### 4. Code Quality & Linting
```bash
npm run lint
```

---

## 🎨 Customizing Styles & Colors

Color variables and dark mode rules are declared in `src/app/globals.css`:

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

:root {
  --background: #f8fafc;
  --foreground: #0f172a;
}

.dark {
  --background: #090d16;
  --foreground: #f1f5f9;
}
```

You can customize primary gradients (`indigo`, `purple`, `cyan`) directly in the component classes or swap out the accent palette using standard Tailwind classes.

---

## 📄 License

Distributed under the [MIT License](LICENSE). Free for personal and commercial use.
