import React, { useState } from 'react';
import { motion } from 'motion/react';
import { redirectToInstallPage, INSTALL_APP_URL } from '../config/installConfig.js';
import './Footer14.css';

export default function Footer14() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const currentYear = new Date().getFullYear();

  const handleDownload = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    redirectToInstallPage();
  };

  const navLinks = [
    { label: 'SlotMate', href: '#services', target: '_self' },
    { label: 'PoolMate', href: '#services', target: '_self' },
    { label: 'FFCS Mate', href: '#services', target: '_self' },
    { label: 'How It Works', href: '#install-guide', target: '_self' },
    { label: 'Install App', href: INSTALL_APP_URL, onClick: handleDownload },
    { label: 'Privacy', href: '#privacy', target: '_self' }
  ];

  return (
    <footer className="footer-14-root">
      <div className="footer-14-container">
        {/* Left Side: Brand & Copyright */}
        <div className="footer-14-brand">
          <div className="footer-brand-logo-wrap">
            <img src="/h-icon.png" alt="HelpU Logo" className="footer-logo-img" />
            <span className="footer-brand-title">HelpU</span>
          </div>
          <span className="footer-divider-dot">•</span>
          <p className="footer-copyright">
            © {currentYear} HelpU. Study. Connect. Stay Updated.
          </p>
        </div>

        {/* Center / Right: Nav links with Gliding Underline */}
        <nav
          className="footer-14-nav"
          onMouseLeave={() => setHoveredIndex(null)}
          aria-label="Footer Navigation"
        >
          {navLinks.map((link, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={link.onClick}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`footer-14-link ${isHovered ? 'is-active' : ''}`}
              >
                <span className="footer-link-text">{link.label}</span>
                {/* Gliding Link Underline with Motion Spring Physics */}
                {isHovered && (
                  <motion.span
                    layoutId="footer-gliding-underline"
                    className="footer-gliding-underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 420,
                      damping: 30
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
