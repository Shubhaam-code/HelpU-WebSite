import React from 'react';

export default function CollectionDetails({ images, onSelectImage }) {
  const pillars = [
    {
      category: '01 / SLOTMATE',
      title: 'Peer Course Sync & Faculty Radar',
      description: 'Find peers taking the exact same courses and slots, broadcast study posts, and read verified ratings for faculty before semester registration.',
      screens: images.slice(0, 4)
    },
    {
      category: '02 / POOLMATE',
      title: 'Smart Campus Commute & Shared Cabs',
      description: 'Publish vehicle rides, split station/airport commercial cabs, filter by gender preferences, and match routes in real time.',
      screens: images.slice(4, 8)
    },
    {
      category: '03 / FFCS MATE',
      title: 'Academic Matrix & Timetable Optimizer',
      description: 'Assemble multi-course schedules, compare professor combinations, prevent classroom clashes, and export color-coded timetable charts.',
      screens: images.slice(8, 12)
    }
  ];

  return (
    <section id="collection" className="collection-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-row">
          <div className="section-header-left">
            <span className="section-pill">CHRONOLOGICAL SEQUENCE</span>
            <h2 className="section-title">The Complete 12-Frame Showcase</h2>
          </div>
          <p className="section-subtitle">
            Every screen captured in its authentic flow. Click any frame below or in the 3D spiral to open full-resolution inspection.
          </p>
        </div>

        {/* Pillars / Feature Blocks */}
        <div className="pillars-grid" id="features">
          {pillars.map((pillar, pIdx) => (
            <div key={pIdx} className="pillar-card">
              <div className="pillar-header">
                <span className="pillar-category">{pillar.category}</span>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-description">{pillar.description}</p>
              </div>

              <div className="pillar-screens-row">
                {pillar.screens.map((img) => {
                  const globalIdx = images.findIndex(i => i.id === img.id);
                  return (
                    <div
                      key={img.id}
                      className="collection-screen-item"
                      onClick={() => onSelectImage(img, globalIdx)}
                      role="button"
                      tabIndex={0}
                      title={`Inspect ${img.title}`}
                    >
                      <div className="screen-thumb-frame">
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="screen-thumb-img"
                        />
                        <div className="screen-thumb-glass">
                          <span className="inspect-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="11" cy="11" r="8"/>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                              <line x1="11" y1="8" x2="11" y2="14"/>
                              <line x1="8" y1="11" x2="14" y2="11"/>
                            </svg>
                          </span>
                        </div>
                        <span className="screen-idx-tag">#{String(globalIdx + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="screen-meta">
                        <h4 className="screen-title">{img.title}</h4>
                        <span className="screen-tag">{img.tag}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Principles Box */}
        <div className="architecture-strip">
          <div className="arch-col">
            <span className="arch-num">01</span>
            <h4>Preserved Image Sequence</h4>
            <p>12 sequential high-fidelity captures rendered without displacement or synthetic modification.</p>
          </div>
          <div className="arch-col">
            <span className="arch-num">02</span>
            <h4>Continuous 3D Helical Projection</h4>
            <p>Real-time trigonometry calculates 3D transform matrices with depth scale and dynamic z-sorting.</p>
          </div>
          <div className="arch-col">
            <span className="arch-num">03</span>
            <h4>Interactive Physical Drag</h4>
            <p>Pointer capture physics with velocity damping, touch gesture support, and scroll sync integration.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
