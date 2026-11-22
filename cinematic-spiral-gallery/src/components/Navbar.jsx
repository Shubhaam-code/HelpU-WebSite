import React, { useState, useEffect } from 'react';
import SquishSwitch from './SquishSwitch.jsx';
import GooeyNav from './GooeyNav.jsx';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Install', href: '#install-options' }
];

export default function Navbar() {
  const [downloading, setDownloading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      // ScrollSpy for Active Nav Item
      const scrollY = window.scrollY;
      const servicesEl = document.getElementById('services');
      const installEl = document.getElementById('install-options');

      const installTop = installEl ? installEl.getBoundingClientRect().top + window.scrollY - 320 : Infinity;
      const servicesTop = servicesEl ? servicesEl.getBoundingClientRect().top + window.scrollY - 320 : Infinity;

      if (scrollY >= installTop) {
        setActiveNavIndex(2);
      } else if (scrollY >= servicesTop) {
        setActiveNavIndex(1);
      } else {
        setActiveNavIndex(0);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavChange = (index, item) => {
    setActiveNavIndex(index);
    if (item.href && item.href.startsWith('#')) {
      const target = document.querySelector(item.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleDownload = () => {
    setDownloading(true);

    // Direct APK Download
    const link = document.createElement('a');
    link.href = '/app/app-debug.apk';
    link.download = 'HelpU.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);

    setTimeout(() => {
      setDownloading(false);
    }, 2500);
  };

  return (
    <header className={`navbar-container ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-content">
        {/* Left Side: Brand Logo */}
        <div
          className="navbar-brand"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveNavIndex(0);
          }}
          title="HelpU"
        >
          <img
            src="/h-icon.png"
            alt="HelpU Logo"
            className="navbar-h-icon"
          />
          <img
            src="/helpu-text.png"
            alt="HelpU"
            className="navbar-helpu-text"
          />
        </div>

        {/* Center: React Bits GooeyNav Interactive WebGL Pill Navigation */}
        <div className="navbar-center-nav">
          <GooeyNav
            items={NAV_ITEMS}
            activeIndex={activeNavIndex}
            onChange={handleNavChange}
            theme="light"
            color="#0284c7"
            activeTextColor="#ffffff"
            colors={['#0284c7', '#38bdf8', '#2563eb', '#0369a1']}
            size={isMobile ? 'sm' : 'md'}
            frame={true}
            particleCount={14}
            spread={48}
            animationTime={550}
            timeVariance={250}
            gooeyness={0.52}
            wobble={0.45}
            hoverEffect={true}
          />
        </div>

        {/* Right Side: SquishSwitch Download Trigger */}
        <div
          className="navbar-download-group"
          onClick={() => {
            if (!downloading) handleDownload(true);
          }}
          title="Install HelpU APK"
        >
          <SquishSwitch
            checked={downloading}
            onChange={handleDownload}
            label=""
            trackColor="#0284c7"
            trackOnColor="#f59e0b"
            thumbColor="#ffffff"
            thumbOnColor="#ffffff"
            width={isMobile ? 42 : 56}
            height={isMobile ? 22 : 28}
            radius={isMobile ? 11 : 14}
            speed={50}
            stretch={isMobile ? 14 : 26}
            hoverScale={1.035}
            colorDuration={320}
          />
          <span className="download-title">
            {downloading ? 'Installing...' : 'APK Install'}
          </span>
        </div>
      </div>

      {/* Floating Download Notification Toast */}
      {showToast && (
        <div className="download-toast">
          <img
            src="/h-icon.png"
            alt="HelpU"
            style={{ width: 26, height: 26, objectFit: 'contain' }}
          />
          <div className="toast-text">
            <strong>HelpU.apk</strong> download started!
          </div>
        </div>
      )}
    </header>
  );
}
