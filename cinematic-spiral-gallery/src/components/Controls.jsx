import React from 'react';

export default function Controls({ config, setConfig, isPaused, setIsPaused }) {
  const togglePreset = () => {
    const presets = ['cylinder', 'orbit', 'wheel', 'panorama'];
    const nextIdx = (presets.indexOf(config.preset) + 1) % presets.length;
    setConfig(prev => ({
      ...prev,
      preset: presets[nextIdx]
    }));
  };

  const toggleAspectRatio = () => {
    // Toggle between exact phone screen ratio (0.485, zero black bars) and square (1)
    setConfig(prev => ({
      ...prev,
      aspectRatio: prev.aspectRatio === 0.485 ? 1 : 0.485,
      cardWidth: prev.aspectRatio === 0.485 ? 220 : 195
    }));
  };

  const cycleSpeed = () => {
    const speeds = [7, 14, 24];
    const nextIdx = (speeds.indexOf(config.speed) + 1) % speeds.length;
    setConfig(prev => ({
      ...prev,
      speed: speeds[nextIdx]
    }));
  };

  return (
    <div className="cinematic-controls-hud">
      <div className="hud-pill-group">
        <button
          type="button"
          className="hud-button"
          onClick={() => setIsPaused(p => !p)}
          title={isPaused ? 'Resume carousel rotation' : 'Pause carousel rotation'}
        >
          {isPaused ? (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              <span>Play</span>
            </>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16"/>
                <rect x="14" y="4" width="4" height="16"/>
              </svg>
              <span>Pause</span>
            </>
          )}
        </button>

        <div className="hud-divider" />

        <button
          type="button"
          className="hud-button"
          onClick={cycleSpeed}
          title="Cycle rotation speed"
        >
          <span className="hud-label">Speed:</span>
          <span className="hud-value">{config.speed}</span>
        </button>

        <div className="hud-divider" />

        <button
          type="button"
          className="hud-button active-mode"
          onClick={togglePreset}
          title="Toggle 3D Preset geometry"
        >
          <span className="hud-label">3D Shape:</span>
          <span className="hud-badge">{config.preset.toUpperCase()}</span>
        </button>

        <div className="hud-divider" />

        <button
          type="button"
          className="hud-button"
          onClick={toggleAspectRatio}
          title="Toggle Card Ratio: 1 (Square) vs 0.58 (Phone)"
        >
          <span className="hud-label">Ratio:</span>
          <span className="hud-badge">{config.aspectRatio === 1 ? '1:1 Square' : 'Phone (0.58)'}</span>
        </button>
      </div>

      <div className="hud-hint">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="16" x2="12" y2="12"/>
          <line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
        <span>Drag left / right to spin cylinder • Arrow keys navigate • Click card to inspect zoom</span>
      </div>
    </div>
  );
}
