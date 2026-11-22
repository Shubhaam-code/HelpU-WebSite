import React from 'react';

export default function Footer({ onScrollTo }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand-col">
          <div className="footer-brand">
            <span className="footer-dot" />
            <span className="footer-name">HelpU</span>
            <span className="footer-badge">Cinematic Edition</span>
          </div>
          <p className="footer-tagline">
            An interactive 3D digital exhibition constructed with React Bits InfiniteSpiral and Vite.
          </p>
        </div>

        <div className="footer-links-col">
          <span className="footer-heading">Navigation</span>
          <button type="button" className="footer-link" onClick={() => onScrollTo('hero')}>
            Hero Spiral
          </button>
          <button type="button" className="footer-link" onClick={() => onScrollTo('collection')}>
            Archive Gallery
          </button>
          <button type="button" className="footer-link" onClick={() => onScrollTo('features')}>
            Architecture
          </button>
        </div>

        <div className="footer-tech-col">
          <span className="footer-heading">Specification</span>
          <div className="tech-badge-list">
            <span className="tech-badge">React 19</span>
            <span className="tech-badge">Vite 6</span>
            <span className="tech-badge">3D Trigonometry</span>
            <span className="tech-badge">GPU Accelerated</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © {currentYear} HelpU. All rights reserved. Built as an autonomous 3D cinematic showcase.
        </p>
        <div className="footer-sub-links">
          <span>Dark Aesthetic</span>
          <span>•</span>
          <span>Preserved Sequence</span>
          <span>•</span>
          <span>Hardware Accelerated</span>
        </div>
      </div>
    </footer>
  );
}
