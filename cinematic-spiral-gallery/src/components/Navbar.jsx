import React, { useState, useEffect } from 'react';
import SquishSwitch from './SquishSwitch.jsx';
import { redirectToInstallPage } from '../config/installConfig.js';

export default function Navbar() {
  const [downloading, setDownloading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDownload = (checked) => {
    setDownloading(true);
    redirectToInstallPage();
  };

  return (
    <header className={`navbar-container ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-content">
        {/* Left Side: Brand Logo */}
        <div className="navbar-brand" title="HelpU">
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

        {/* Right Side: SquishSwitch Download Trigger (Switch on Top, 'Download' Below) */}
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
            width={isMobile ? 50 : 60}
            height={isMobile ? 26 : 30}
            radius={isMobile ? 13 : 15}
            speed={50}
            stretch={isMobile ? 20 : 28}
            hoverScale={1.035}
            colorDuration={320}
          />
          <span className="download-title">
            {downloading ? 'Installing...' : 'Install'}
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
            <strong>HelpU-App.apk</strong> download started!
          </div>
        </div>
      )}
    </header>
  );
}
