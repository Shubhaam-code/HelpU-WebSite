# HelpU — Official Landing Page & Interactive Showcase 🌐📱✨

[![React 19](https://img.shields.io/badge/Frontend-React%2019-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Bundler-Vite%206-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Motion](https://img.shields.io/badge/Animations-Motion-FF4154?logo=framer&logoColor=white)](https://motion.dev/)
[![PWA Ready](https://img.shields.io/badge/PWA-Enabled-5A0FC8?logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![Android APK](https://img.shields.io/badge/Download-Android%20APK-3DDC84?logo=android&logoColor=white)](public/app/app-debug.apk)

> **HelpU Landing Page** is a high-performance, visually immersive web application and interactive product showcase for **HelpU — The All-in-One Campus Super-App**. Designed with modern glassmorphism, 3D device previews, dynamic canvas effects, and seamless Progressive Web App (PWA) installation capabilities.

---

## 🌟 Key Features

* **Interactive 3D Spiral Showcase:** Dynamic carousel highlighting core modules (PoolMate, SlotMate, and FFCS Mate) with smooth hardware-accelerated animations.
* **Live Scanner Background Canvas:** Custom high-framerate interactive canvas background with mouse reactivity and ambient light themes.
* **3D Phone Mockup Showcase:** Realistic mobile viewport displaying actual app UI snapshots, active feature pills, and feature highlights.
* **Cross-Platform Install Guide:** Step-by-step interactive onboarding for:
  * **Direct Android APK Download** with instant feedback and toast alerts.
  * **Progressive Web App (PWA)** one-tap installation via `beforeinstallprompt`.
  * **iOS Add to Home Screen** instructions with visual guidance.
* **Advanced Motion & Typography:**
  * **GooeyNav:** Fluid SVG filter navigation menu.
  * **VariableProximity:** Interactive distance-based font-weight morphing.
  * **RotatingText:** 3D smooth rotating typographic accents.
  * **BorderGlow & 3D Letter Swap:** Micro-interactions that elevate visual fidelity.
* **Offline & PWA Ready:** Configured with `manifest.json`, service worker caching (`sw.js`), and responsive metadata for desktop and mobile.

---

## 🛠️ Tech Stack

| Area | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Build Tool & Bundler** | [Vite](https://vitejs.dev/) |
| **Animation Engine** | [Motion](https://motion.dev/) |
| **Styling** | Modern CSS3 (CSS Variables, Flexbox, Grid, Glassmorphic Backdrop Filters) |
| **PWA & Distribution** | Service Worker, Web App Manifest, Standalone Android APK |

---

## 📁 Directory Structure

```text
HelpU WebSite/
├── cinematic-spiral-gallery/
│   ├── public/
│   │   ├── app/                 # Distributable Android APKs
│   │   ├── gallery/             # High-res app screenshots & feature assets
│   │   ├── services/            # Module banners (FFCS, PoolMate, SlotMate)
│   │   ├── manifest.json        # PWA manifest configuration
│   │   ├── sw.js                # PWA service worker caching
│   │   └── favicon.png          # App branding icons
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Hero.jsx         # Hero section & interactive 3D carousel
│   │   │   ├── PhoneShowcase.jsx# 3D mobile preview with active tabs
│   │   │   ├── InstallGuide.jsx # Step-by-step multi-device installer
│   │   │   ├── Scanner.jsx      # Interactive canvas background
│   │   │   ├── GooeyNav.jsx     # Fluid SVG navigation menu
│   │   │   ├── RotatingText.jsx # Dynamic rotating typography
│   │   │   ├── VariableProximity.jsx # Mouse-proximity font scaling
│   │   │   ├── Navbar.jsx       # Header with app actions & APK download
│   │   │   └── Footer14.jsx     # Modern animated footer
│   │   ├── hooks/
│   │   │   └── usePwaInstall.js # PWA install prompt & lifecycle hook
│   │   ├── data/
│   │   │   └── images.js        # Showcase images and carousel configuration
│   │   ├── App.jsx              # Main application root
│   │   └── main.jsx             # React DOM mount entry
│   ├── package.json             # Dependencies and scripts
│   └── vite.config.js           # Vite development and build settings
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: v18.0.0 or higher
* **npm** or **pnpm**

### Installation

1. Navigate to the project directory:
   ```bash
   cd "HelpU WebSite/cinematic-spiral-gallery"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

### Production Build

To build the project for production deployment:
```bash
npm run build
```
The optimized production bundle will be generated in `cinematic-spiral-gallery/dist/`.

---

## 📱 HelpU Ecosystem

This landing page is part of the larger **HelpU** campus platform:
* **Core Application Repo:** [Shubhaam-code/HelpU](https://github.com/Shubhaam-code/HelpU)
  * Uni mobility & carpooling (**PoolMate**)
  * Timetable & free-slot matching (**SlotMate**)
  * AI-powered timetable & course planner (**FFCS Mate**)

---

## 📄 License
This project is proprietary and developed for campus students. All rights reserved.
