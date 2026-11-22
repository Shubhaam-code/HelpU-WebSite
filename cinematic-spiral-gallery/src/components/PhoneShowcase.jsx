import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './PhoneShowcase.css';

const SERVICES = [
  {
    id: 'slotmate',
    name: 'SlotMate',
    tabLabel: 'SlotMate',
    subLabel: 'Slots',
    icon: '🎓',
    title: 'Find Your Slot Partner',
    description: 'Connect with students who have the same course in the same slot.',
    color: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.35)',
    bgTint: 'rgba(254, 243, 199, 0.5)',
    image: '/services/slotmate.jpg',
    badge: 'Study Sync',
    stats: [
      { label: 'My Posts', value: '1' },
      { label: 'Total Matches', value: '1' },
      { label: 'Courses', value: '1' },
      { label: 'My Slots', value: '1' }
    ]
  },
  {
    id: 'poolmate',
    name: 'PoolMate',
    tabLabel: 'PoolMate',
    subLabel: 'Rides',
    icon: '🚗',
    title: 'Travel Together with PoolMate',
    description: 'Share rides, split cab costs, and make campus & airport travel easier.',
    color: '#ea580c',
    glowColor: 'rgba(234, 88, 12, 0.35)',
    bgTint: 'rgba(255, 237, 213, 0.5)',
    image: '/services/poolmate.jpg',
    badge: 'Cab Pooling',
    stats: [
      { label: 'Offer Ride', value: 'Instant' },
      { label: 'Find Ride', value: 'Live' },
      { label: 'Shared Groups', value: 'Active' },
      { label: 'Split Cab', value: '50-70%' }
    ]
  },
  {
    id: 'ffcsmate',
    name: 'FFCS Mate',
    tabLabel: 'FFCS Mate',
    subLabel: 'Curriculum',
    icon: '👥',
    title: 'Make Your FFCS Smarter',
    description: 'Explore courses, compare top faculty, and plan your clash-free schedule.',
    color: '#2563eb',
    glowColor: 'rgba(37, 99, 235, 0.35)',
    bgTint: 'rgba(219, 234, 254, 0.5)',
    image: '/services/ffcsmate.jpg',
    badge: 'Faculty Radar',
    stats: [
      { label: 'Courses', value: 'Curated' },
      { label: 'Faculty Rating', value: 'Verified' },
      { label: 'Timetable', value: 'Clash-Free' },
      { label: 'Peer Sync', value: 'Realtime' }
    ]
  }
];

export default function PhoneShowcase({ onDownload }) {
  const [activeIndex, setActiveIndex] = useState(1); // Default PoolMate or SlotMate in center
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isExtraSmall = windowWidth < 380;
  const isSmallMobile = windowWidth < 480;
  const isMobile = windowWidth < 768;

  const currentService = SERVICES[activeIndex];

  // Helper to determine relative position of phone: -1 (left), 0 (center), 1 (right)
  const getRelativePosition = (index) => {
    const diff = (index - activeIndex + 3) % 3;
    if (diff === 0) return 0; // Center
    if (diff === 1) return 1; // Right
    return -1; // Left
  };

  return (
    <div className="phone-showcase-wrapper">
      {/* Background Ambient Elements */}
      <div className="showcase-ambient-grid" />

      {/* 3D Realistic Phone Mockups Trio Container (Image 1 Style) */}
      <div className="phones-trio-viewport">
        <div className="phones-trio-stage">
          {SERVICES.map((service, index) => {
            const pos = getRelativePosition(index);
            const isCenter = pos === 0;
            const isLeft = pos === -1;
            const isRight = pos === 1;

            // Compute dynamic 3D transform values
            let targetX = 0;
            let targetY = 0;
            let targetZ = 30;
            let targetRotateY = 0;
            let targetRotateZ = 0;
            let targetScale = 1;
            let zIndex = 25;
            let opacity = 1;

            if (isLeft) {
              targetX = isExtraSmall ? -74 : isSmallMobile ? -88 : isMobile ? -120 : -210;
              targetY = isSmallMobile ? 8 : isMobile ? 14 : 24;
              targetZ = -40;
              targetRotateY = isSmallMobile ? 24 : isMobile ? 22 : 24;
              targetRotateZ = -4;
              targetScale = isExtraSmall ? 0.65 : isSmallMobile ? 0.70 : isMobile ? 0.78 : 0.88;
              zIndex = 10;
              opacity = 0.92;
            } else if (isRight) {
              targetX = isExtraSmall ? 74 : isSmallMobile ? 88 : isMobile ? 120 : 210;
              targetY = isSmallMobile ? 8 : isMobile ? 14 : 24;
              targetZ = -40;
              targetRotateY = isSmallMobile ? -24 : isMobile ? -22 : -24;
              targetRotateZ = 4;
              targetScale = isExtraSmall ? 0.65 : isSmallMobile ? 0.70 : isMobile ? 0.78 : 0.88;
              zIndex = 10;
              opacity = 0.92;
            } else {
              targetScale = isExtraSmall ? 0.88 : isSmallMobile ? 0.94 : 1;
            }

            return (
              <motion.div
                key={service.id}
                className={`phone-mockup-wrapper ${isCenter ? 'is-center' : 'is-side'}`}
                style={{ zIndex }}
                animate={{
                  x: targetX,
                  y: targetY,
                  scale: targetScale,
                  rotateY: targetRotateY,
                  rotateZ: targetRotateZ,
                  opacity
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 26,
                  mass: 0.8
                }}
                onClick={() => setActiveIndex(index)}
                whileHover={!isCenter ? { scale: targetScale * 1.03, cursor: 'pointer' } : {}}
              >
                {/* Smartphone Device Frame */}
                <div
                  className="smartphone-frame"
                  style={{
                    boxShadow: isCenter
                      ? '0 28px 55px -10px rgba(2, 132, 199, 0.22), 0 20px 35px rgba(15, 23, 42, 0.16)'
                      : '0 18px 38px rgba(15, 23, 42, 0.18)'
                  }}
                >
                  {/* Dynamic Island / Speaker Punch-hole */}
                  <div className="phone-notch">
                    <span className="notch-camera" />
                    <span className="notch-speaker" />
                  </div>

                  {/* Glass Gloss & Glare Reflection Overlay */}
                  <div className="phone-screen-glare" />

                  {/* Screen Content: Authentic Service Screenshot */}
                  <div className="phone-screen-viewport">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="phone-screen-img"
                      loading="eager"
                    />
                  </div>

                  {/* Bottom Home Indicator Bar */}
                  <div className="phone-home-indicator" />
                </div>

                {/* Floating Service Badge below side phone on hover */}
                {!isCenter && (
                  <div className="side-phone-click-hint">
                    Tap to view
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
