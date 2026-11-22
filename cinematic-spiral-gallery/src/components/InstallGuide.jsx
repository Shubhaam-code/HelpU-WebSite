import React, { useState } from 'react';
import BorderGlow from './BorderGlow.jsx';
import { redirectToInstallPage } from '../config/installConfig.js';
import './InstallGuide.css';

export default function InstallGuide() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    redirectToInstallPage();
  };

  return (
    <section className="install-guide-section">
      <div className="install-guide-container">
        {/* Left Card: Get Started in Seconds */}
        <div className="guide-card guide-steps-card">
          <div className="guide-card-header">
            <span className="guide-badge">
              <video
                src="/shooting-star.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="badge-star-video"
              />
              How It Works?
            </span>
            <h3 className="guide-card-title">
              Get Started in <span className="highlight-orange">Seconds</span>
            </h3>
            <p className="guide-card-subtitle">
              Follow these simple steps to install the app:
            </p>
          </div>

          <div className="guide-steps-flow">
            {/* Step 1 */}
            <div className="step-item">
              <div className="step-circle-badge">1</div>
              <div className="step-icon-wrap">
                <video
                  src="/step-website.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="step-animation-video"
                />
              </div>
              <h4 className="step-title">Open the Website</h4>
              <p className="step-desc">Visit our official site</p>
            </div>

            <div className="step-arrow">→</div>

            {/* Step 2 */}
            <div className="step-item">
              <div className="step-circle-badge">2</div>
              <div className="step-icon-wrap">
                <video
                  src="/step-install.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="step-animation-video"
                />
              </div>
              <h4 className="step-title">Tap Install App</h4>
              <p className="step-desc">Add to your device</p>
            </div>

            <div className="step-arrow">→</div>

            {/* Step 3 */}
            <div className="step-item">
              <div className="step-circle-badge">3</div>
              <div className="step-icon-wrap">
                <video
                  src="/step-home.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="step-animation-video"
                />
              </div>
              <h4 className="step-title">Add to Home Screen</h4>
              <p className="step-desc">Enjoy seamless access</p>
            </div>
          </div>
        </div>

        {/* Right Card: Works on All Devices */}
        <div className="guide-card guide-devices-card">
          <div className="guide-card-header">
            <div className="devices-header-title">
              <div className="header-thumb-wrap">
                <video
                  src="/thumb-up.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="header-thumb-video"
                />
              </div>
              <h3 className="guide-card-title">Works on All Devices</h3>
            </div>
          </div>

          <div className="guide-devices-grid">
            {/* Android with BorderGlow */}
            <BorderGlow
              className="device-item-glow"
              edgeSensitivity={30}
              glowColor="142 75 55"
              backgroundColor="#ffffff"
              borderRadius={18}
              glowRadius={28}
              glowIntensity={1.2}
              coneSpread={28}
              colors={['#22c55e', '#3ddc84', '#0284c7']}
            >
              <div className="device-item-content">
                <div className="device-icon android">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    {/* Left arm */}
                    <rect x="1.5" y="8" width="3" height="8.5" rx="1.5" fill="#3DDC84" />
                    {/* Right arm */}
                    <rect x="19.5" y="8" width="3" height="8.5" rx="1.5" fill="#3DDC84" />
                    {/* Head dome */}
                    <path d="M6 7.5C6 4.19 8.69 1.5 12 1.5s6 2.69 6 6H6z" fill="#3DDC84" />
                    {/* Antennae */}
                    <line x1="8.8" y1="2.8" x2="7.2" y2="0.8" stroke="#3DDC84" strokeWidth="1.3" strokeLinecap="round" />
                    <line x1="15.2" y1="2.8" x2="16.8" y2="0.8" stroke="#3DDC84" strokeWidth="1.3" strokeLinecap="round" />
                    {/* Eyes */}
                    <circle cx="9.5" cy="5" r="0.75" fill="#ffffff" />
                    <circle cx="14.5" cy="5" r="0.75" fill="#ffffff" />
                    {/* Body */}
                    <path d="M6 9h12v7.5c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V9z" fill="#3DDC84" />
                    {/* Left leg */}
                    <rect x="8" y="18.5" width="2.5" height="4.5" rx="1.25" fill="#3DDC84" />
                    {/* Right leg */}
                    <rect x="13.5" y="18.5" width="2.5" height="4.5" rx="1.25" fill="#3DDC84" />
                  </svg>
                </div>
                <h4 className="device-name">Android</h4>
                <p className="device-note">Tap "Install" in Chrome</p>
              </div>
            </BorderGlow>

            {/* iPhone with BorderGlow */}
            <BorderGlow
              className="device-item-glow"
              edgeSensitivity={30}
              glowColor="205 90 60"
              backgroundColor="#ffffff"
              borderRadius={18}
              glowRadius={28}
              glowIntensity={1.2}
              coneSpread={28}
              colors={['#0f172a', '#38bdf8', '#0284c7']}
            >
              <div className="device-item-content">
                <div className="device-icon apple">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="#000000">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.91-2.87-.92.04-2.01.62-2.65 1.37-.56.65-1.06 1.71-.92 2.74 1.03.08 2.05-.49 2.66-1.24z"/>
                  </svg>
                </div>
                <h4 className="device-name">iPhone</h4>
                <p className="device-note">Use Safari "Add to Home Screen"</p>
              </div>
            </BorderGlow>

            {/* Desktop with BorderGlow */}
            <BorderGlow
              className="device-item-glow"
              edgeSensitivity={30}
              glowColor="200 85 55"
              backgroundColor="#ffffff"
              borderRadius={18}
              glowRadius={28}
              glowIntensity={1.2}
              coneSpread={28}
              colors={['#0284c7', '#38bdf8', '#f59e0b']}
            >
              <div className="device-item-content">
                <div className="device-icon desktop">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <rect x="3.5" y="4" width="17" height="11.5" rx="1.5" stroke="#1e293b" strokeWidth="1.8"/>
                    <path d="M1.5 19C1.5 18.45 1.95 18 2.5 18h19c.55 0 1 .45 1 1s-.45 1-1 1h-19c-.55 0-1-.45-1-1z" fill="#1e293b"/>
                    <path d="M10 16h4" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 className="device-name">Desktop</h4>
                <p className="device-note">Install from browser menu</p>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>

      {/* Bottom Floating CTA Banner (Matching User Reference Image with notification.mp4) */}
      <div className="install-cta-banner">
        <div className="cta-banner-left">
          <div className="cta-bell-circle">
            <video
              src="/notification.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="cta-notification-video"
            />
          </div>
          <div className="cta-text-wrap">
            <h3 className="cta-title">Ready to Get Started?</h3>
            <p className="cta-subtitle">Download the app and stay connected.</p>
          </div>
        </div>

        <button
          className="cta-install-btn"
          onClick={handleDownload}
          title="Install HelpU App"
        >
          <span>{downloading ? 'Downloading...' : 'Install App'}</span>
          <span className="cta-btn-arrow">→</span>
        </button>
      </div>
    </section>
  );
}
