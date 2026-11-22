import React, { useState, useEffect } from 'react';
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
    speed: 7,
    curve: 0
  });

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 || ('ontouchstart' in window && window.innerWidth < 1024);
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768 || ('ontouchstart' in window && window.innerWidth < 1024));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="cinematic-app">
      {/* Global Interactive Light Blue Scanner Canvas Background (Active on both Desktop & Mobile) */}
      <div className="app-scanner-bg">
        <Scanner
          color1="#0284c7"
          color2="#38bdf8"
          color3="#0284c7"
          speed={0.35}
          sweepSpeed={0.2}
          sweepWidth={2.0}
          trail={0.65}
          ripple={0.25}
          bandDensity={isMobile ? 8 : 11}
          lineWidth={isMobile ? 2.4 : 1.4}
          glow={isMobile ? 0.75 : 0.55}
          brightness={isMobile ? 1.6 : 1.2}
          vignette={isMobile ? 0.05 : 0.25}
          scanDirection="vertical"
          colorSpread={0.65}
          scanline={false}
          grain={false}
          mouseInteraction={!isMobile}
          clickEffect={isMobile ? 'none' : 'ping'}
          dpr={isMobile ? 1.0 : 1.25}
          lightMode
          opacity={0.95}
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
