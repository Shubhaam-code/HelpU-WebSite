import React, { useState, useRef, useEffect } from 'react';
import BorderGlow from './BorderGlow.jsx';
import VariableProximity from './VariableProximity.jsx';
import { usePwaInstall } from '../hooks/usePwaInstall.js';
import './InstallGuide.css';

function LazyVideo({ src, className, ...props }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      preload="none"
      className={className}
      {...props}
    />
  );
}

export default function InstallGuide() {
  const [apkDownloading, setApkDownloading] = useState(false);
  const optionsHeaderRef = useRef(null);
  const { isInstalled, triggerPwaInstall, toastMessage, setToastMessage } = usePwaInstall();

  const handleApkDownload = () => {
    setApkDownloading(true);
    const link = document.createElement('a');
    link.href = '/app/app-debug.apk';
    link.download = 'HelpU.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setApkDownloading(false);
    }, 2500);
  };

  const handlePwaInstall = async () => {
    await triggerPwaInstall();
  };

  return (
    <section className="install-guide-section" id="how-it-works">
      <div className="install-guide-container">
        {/* Left Card: Get Started in Seconds */}
        <div className="guide-card guide-steps-card">
          <div className="guide-card-header">
            <span className="guide-badge">
              <LazyVideo
                src="/shooting-star.mp4"
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
                <LazyVideo
                  src="/step-website.mp4"
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
                <LazyVideo
                  src="/step-install.mp4"
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
                <LazyVideo
                  src="/step-home.mp4"
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
                <LazyVideo
                  src="/thumb-up.mp4"
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

      {/* Two Dedicated Distinct Installation Methods: PWA vs Android APK */}
      <div className="install-methods-section" id="install-options">
        <div className="install-options-header" ref={optionsHeaderRef} style={{ position: 'relative' }}>
          <h3 className="options-section-title">
            <VariableProximity
              label="Choose Your"
              className="proximity-title-dark"
              fromFontVariationSettings="'wght' 700, 'opsz' 24"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={optionsHeaderRef}
              radius={100}
              falloff="linear"
              smoothing={0.2}
              fromColor="#0f172a"
              toColor="#0284c7"
            />{' '}
            <VariableProximity
              label="Installation Method"
              className="proximity-title-blue"
              fromFontVariationSettings="'wght' 700, 'opsz' 24"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={optionsHeaderRef}
              radius={100}
              falloff="linear"
              smoothing={0.2}
              fromColor="#0284c7"
              toColor="#2563eb"
            />
          </h3>
          <p className="options-section-subtitle">
            <VariableProximity
              label="Install instantly as a web app or download the native Android application."
              className="proximity-subtitle"
              fromFontVariationSettings="'wght' 600, 'opsz' 14"
              toFontVariationSettings="'wght' 800, 'opsz' 24"
              containerRef={optionsHeaderRef}
              radius={80}
              falloff="linear"
              smoothing={0.2}
              fromColor="#1e293b"
              toColor="#0f172a"
            />
          </p>
        </div>

        <div className="install-options-grid">
          {/* Option A: Install PWA Card */}
          <div className="install-option-card option-card-pwa">
            {/* Mascot Peeking / Sitting on Top of PWA Box */}
            <div className="pwa-card-mascot-wrapper" aria-hidden="true">
              <picture>
                <source type="image/webp" srcSet="/pwa-students-dance.webp" />
                <img
                  src="/pwa-students-dance.gif"
                  alt="HelpU Students on Laptop"
                  className="pwa-card-mascot-img"
                  loading="lazy"
                />
              </picture>
            </div>

            <div className="option-card-header">
              <div className="option-icon-box icon-box-pwa">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                  <path d="M12 7v5m0 0l-2-2m2 2l2-2" stroke="#0284c7" strokeWidth="2.2"/>
                </svg>
              </div>
              <span className="option-pill-badge badge-pwa">Instant Web App</span>
            </div>

            <div className="option-card-body">
              <h4 className="option-card-heading">Install PWA</h4>
              <p className="option-card-copy">
                Launch & install the verified HelpU Web App directly in your browser.
              </p>
            </div>

            <div className="option-card-footer">
              <button
                type="button"
                className="btn-install-choice btn-pwa-choice"
                onClick={handlePwaInstall}
                title="Install HelpU PWA to Home Screen"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span>{isInstalled ? 'Installed ✓' : 'Install PWA'}</span>
              </button>
            </div>
          </div>

          {/* Option B: Download Android APK Card */}
          <div className="install-option-card option-card-apk">
            {/* Mascot Peeking / Sitting on Top of Android APK Box (Right Aligned, Touching Edge) */}
            <div className="apk-card-mascot-wrapper" aria-hidden="true">
              <picture>
                <source type="image/webp" srcSet="/apk-students-study.webp" />
                <img
                  src="/apk-students-study.gif"
                  alt="HelpU Students Studying"
                  className="apk-card-mascot-img"
                  loading="lazy"
                />
              </picture>
            </div>

            <div className="option-card-header">
              <div className="option-icon-box icon-box-apk">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <rect x="1.5" y="8" width="3" height="8.5" rx="1.5" fill="#16a34a" />
                  <rect x="19.5" y="8" width="3" height="8.5" rx="1.5" fill="#16a34a" />
                  <path d="M6 7.5C6 4.19 8.69 1.5 12 1.5s6 2.69 6 6H6z" fill="#16a34a" />
                  <line x1="8.8" y1="2.8" x2="7.2" y2="0.8" stroke="#16a34a" strokeWidth="1.3" strokeLinecap="round" />
                  <line x1="15.2" y1="2.8" x2="16.8" y2="0.8" stroke="#16a34a" strokeWidth="1.3" strokeLinecap="round" />
                  <circle cx="9.5" cy="5" r="0.75" fill="#ffffff" />
                  <circle cx="14.5" cy="5" r="0.75" fill="#ffffff" />
                  <path d="M6 9h12v7.5c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V9z" fill="#16a34a" />
                  <rect x="8" y="18.5" width="2.5" height="4.5" rx="1.25" fill="#16a34a" />
                  <rect x="13.5" y="18.5" width="2.5" height="4.5" rx="1.25" fill="#16a34a" />
                </svg>
              </div>
              <span className="option-pill-badge badge-apk">Android Only</span>
            </div>

            <div className="option-card-body">
              <h4 className="option-card-heading">Android APK</h4>
              <p className="option-card-copy">
                Download the Android app installer directly to your device.
              </p>
            </div>

            <div className="option-card-footer">
              <button
                type="button"
                className="btn-install-choice btn-apk-choice"
                onClick={handleApkDownload}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span>{apkDownloading ? 'Downloading APK...' : 'Download APK'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating CTA Banner (Matching User Reference Image with notification.mp4) */}
      <div className="install-cta-banner">
        <div className="cta-banner-left">
          <div className="cta-bell-circle">
            <LazyVideo
              src="/notification.mp4"
              className="cta-notification-video"
            />
          </div>
          <div className="cta-text-wrap">
            <h3 className="cta-title">Ready to Get Started?</h3>
            <p className="cta-subtitle">Choose PWA or direct APK download to stay connected.</p>
          </div>
        </div>

        <div className="cta-actions-group">
          <button
            type="button"
            className="cta-btn-pwa"
            onClick={handlePwaInstall}
            title="Install HelpU PWA to Home Screen"
          >
            <span>Install PWA</span>
          </button>
          <button
            type="button"
            className="cta-btn-apk"
            onClick={handleApkDownload}
            title="Download Android APK"
          >
            <span>{apkDownloading ? 'Downloading...' : 'Download APK'}</span>
            <span className="cta-btn-arrow">↓</span>
          </button>
        </div>
      </div>

      {/* Interactive Guidance Toast for PWA installation */}
      {toastMessage && (
        <div className="pwa-guide-toast">
          <span className="toast-pwa-icon">💡</span>
          <span className="toast-pwa-text">{toastMessage}</span>
          <button
            type="button"
            className="toast-pwa-close"
            onClick={() => setToastMessage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
