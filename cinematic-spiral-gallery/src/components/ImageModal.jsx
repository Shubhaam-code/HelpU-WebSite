import React, { useEffect } from 'react';

export default function ImageModal({ selectedImage, selectedIndex, totalCount, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!selectedImage) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-index">SCREEN #{String(selectedIndex + 1).padStart(2, '0')} / {totalCount}</span>
            <h3 className="modal-title">{selectedImage.title}</h3>
            <span className="modal-category">{selectedImage.category}</span>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close Preview"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <button
            type="button"
            className="modal-nav-btn prev-btn"
            onClick={onPrev}
            aria-label="Previous image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div className="modal-image-wrapper">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="modal-main-image"
            />
          </div>

          <button
            type="button"
            className="modal-nav-btn next-btn"
            onClick={onNext}
            aria-label="Next image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        {/* Modal Description Footer */}
        <div className="modal-footer">
          <p className="modal-desc">{selectedImage.description}</p>
          <div className="modal-hints">
            <span>ESC to close</span>
            <span>•</span>
            <span>← / → to navigate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
