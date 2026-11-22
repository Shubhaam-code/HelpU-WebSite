import React, { useEffect } from 'react';
import './PwaInstallModal.css';

export default function PwaInstallModal({
  isOpen,
  onClose,
  onInstall,
  isInstalled = false
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="pwa-modal-backdrop"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="pwa-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Sheet Drag Indicator Bar */}
        <div className="pwa-modal-drag-pill" />

        {/* Top-Right Cut/Close Button [✕] */}
        <button
          type="button"
          className="pwa-modal-close-btn"
          onClick={onClose}
          aria-label="Close"
          title="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Modal Header: App Icon & Name */}
        <div className="pwa-modal-header">
          <div className="pwa-modal-icon-wrap">
            <img
              src="/pwa-192x192.png"
              alt="HelpU Logo"
              className="pwa-modal-app-logo"
            />
            <span className="pwa-modal-badge-check" title="Verified App">✓</span>
          </div>

          <div className="pwa-modal-title-group">
            <h3 className="pwa-modal-title">Install HelpU App</h3>
            <p className="pwa-modal-subtitle">Your Campus in Your Pocket</p>
          </div>
        </div>

        {/* App Highlights */}
        <div className="pwa-modal-features">
          <div className="pwa-feature-item">
            <div className="pwa-feature-icon">⚡</div>
            <div className="pwa-feature-text">
              <strong>1-Tap Home Screen Access</strong>
              <span>Launch directly like a native app without typing URLs</span>
            </div>
          </div>

          <div className="pwa-feature-item">
            <div className="pwa-feature-icon">📦</div>
            <div className="pwa-feature-text">
              <strong>Super Light (&lt; 2 MB)</strong>
              <span>Installs instantly without consuming phone memory</span>
            </div>
          </div>

          <div className="pwa-feature-item">
            <div className="pwa-feature-icon">🎓</div>
            <div className="pwa-feature-text">
              <strong>SlotMate &amp; PoolMate</strong>
              <span>Instant campus ride-sharing and peer schedule sync</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pwa-modal-actions">
          <button
            type="button"
            className="pwa-modal-btn-install"
            onClick={onInstall}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>{isInstalled ? 'Open Installed App' : 'Install App Now'}</span>
          </button>

          <button
            type="button"
            className="pwa-modal-btn-cancel"
            onClick={onClose}
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}
