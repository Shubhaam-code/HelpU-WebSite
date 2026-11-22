import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import InstallGuide from './components/InstallGuide.jsx';
import Footer14 from './components/Footer14.jsx';
import Scanner from './components/Scanner.jsx';
import { galleryImages } from './data/images.js';
import './App.css';

export default function App() {
  const [config, setConfig] = useState({
    preset: 'cylinder',
    intro: 'rise',
    cardWidth: 195,
    aspectRatio: 0.485,
    speed: 14,
    curve: 0
  });

  return (
    <div className="cinematic-app">
      {/* Global Interactive Light Blue Scanner Canvas Background */}
      <div className="app-scanner-bg">
        <Scanner
          color1="#0284c7"
          color2="#38bdf8"
          color3="#1d4ed8"
          speed={0.4}
          sweepSpeed={0.22}
          sweepWidth={1.8}
          trail={0.55}
          ripple={0.22}
          bandDensity={11}
          glow={0.55}
          scanDirection="vertical"
          colorSpread={0.6}
          scanline
          scanlineIntensity={0.35}
          mouseInteraction
          clickEffect="ping"
          lightMode
          opacity={0.75}
        />
      </div>

      {/* Top Navbar */}
      <Navbar />

      {/* Main Hero Showcase */}
      <main>
        <Hero
          images={galleryImages}
          config={config}
        />
        {/* How It Works & Multi-Device Install Guide */}
        <InstallGuide />
      </main>

      {/* Footer 14: One-row footer with gliding link underline */}
      <Footer14 />
    </div>
  );
}
