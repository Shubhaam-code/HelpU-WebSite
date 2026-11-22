import React, { useState, useEffect } from 'react';
import PhoneShowcase from './PhoneShowcase.jsx';
import CircularCarousel from './CircularCarousel.jsx';
import ThreeDLetterSwap from './ThreeDLetterSwap.jsx';
import RotatingText from './RotatingText.jsx';

export default function Hero({ images, config }) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallMobile = windowWidth < 480;
  const isMobile = windowWidth < 768;

  // Format items for CircularCarousel
  const carouselItems = images.map((img) => ({
    src: img.src,
    alt: img.alt,
    title: img.title,
    subtitle: img.subtitle || img.category,
    id: img.id
  }));

  const responsiveCardWidth = isSmallMobile ? 122 : isMobile ? 138 : config.cardWidth;
  const responsiveHeight = isSmallMobile ? '370px' : isMobile ? '410px' : '580px';
  const responsivePerspective = isSmallMobile ? 1350 : isMobile ? 1550 : 2300;

  return (
    <section id="hero" className="hero-section">
      {/* Animated Soft Blue (#F2F5FE) Fluid Motion Background */}
      <div className="motion-bg">
        <div className="motion-blob blob-blue-main" />
        <div className="motion-blob blob-blue-soft" />
        <div className="motion-blob blob-blue-glow" />
        <div className="motion-grid-overlay" />
      </div>

      {/* Hero Title & Tagline from User with 3D Letter Swap */}
      <div className="hero-text-header">
        <h1 className="hero-campus-title">
          <ThreeDLetterSwap
            className="title-dark"
            frontFaceClassName="three-d-dark-text"
            secondFaceClassName="three-d-dark-text"
            rotateDirection="top"
            staggerDuration={0.035}
            staggerFrom="first"
          >
            Your Campus
          </ThreeDLetterSwap>
          <ThreeDLetterSwap
            className="title-blue"
            frontFaceClassName="three-d-blue-gradient"
            secondFaceClassName="three-d-blue-gradient"
            rotateDirection="top"
            staggerDuration={0.035}
            staggerFrom="first"
          >
            in Your Pocket
          </ThreeDLetterSwap>
        </h1>
        <p className="hero-campus-tagline">
          Study. Connect. Stay Updated.
        </p>
      </div>

      {/* Hero Students Animation - As shown in design mockup */}
      <div className="hero-students-wrapper" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet="/students-animation.webp" />
          <img
            src="/students-animation.gif"
            alt="HelpU Campus Students"
            className="hero-students-img"
            loading="eager"
          />
        </picture>
      </div>

      {/* 1. Centerpiece: CircularCarousel 3D Rotating Exhibition */}
      <div className="spiral-viewport-container">
        <div className="spiral-spotlight" />
        <div className="spiral-pedestal-light" />

        <div style={{ width: '100%', height: responsiveHeight, position: 'relative' }}>
          <CircularCarousel
            items={carouselItems}
            preset={config.preset}
            intro={config.intro}
            cardWidth={responsiveCardWidth}
            aspectRatio={config.aspectRatio}
            gap={isMobile ? 18 : 25}
            perspective={responsivePerspective}
            curve={config.curve ?? 0}
            autoplay="drift"
            speed={7}
            pauseOnHover={false}
            draggable={true}
            captions={false}
            fadeColor="#F2F5FE"
            innerShade={0.08}
          />
        </div>
      </div>

      {/* Mid-Section Transition Headline in Empty Gap with React Bits RotatingText */}
      <div className="showcase-transition-header">
        <h2 className="showcase-transition-title">
          <span>Your College Life,</span>{' '}
          <RotatingText
            texts={['Upgraded.', 'Simplified.', 'Connected.', 'Smarter.']}
            mainClassName="showcase-rotating-accent"
            splitLevelClassName="showcase-rotating-word-masked"
            elementLevelClassName="showcase-rotating-letter"
            effect="slide"
            direction="up"
            staggerFrom="last"
            staggerDuration={0.025}
            rotationInterval={2400}
            auto={true}
            loop={true}
          />
        </h2>
        <p className="showcase-transition-subtitle">
          The smarter way to navigate your campus journey.
        </p>
      </div>

      {/* 2. Directly Beneath: 3 Services Showcase (Zero Overlap, Clean & Spacious) */}
      <div className="services-showcase-section" id="services">
        <PhoneShowcase />
      </div>
    </section>
  );
}
