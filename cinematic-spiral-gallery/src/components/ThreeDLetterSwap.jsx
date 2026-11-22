import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'motion/react';
import './ThreeDLetterSwap.css';

/**
 * Splits text into grapheme clusters safely (preserving emojis and special characters).
 */
function splitGraphemes(text) {
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(text), ({ segment }) => segment);
  }
  return Array.from(text);
}

/**
 * Calculates stagger delay based on origin and duration.
 */
function getStaggerDelay(index, total, staggerFrom, staggerDuration) {
  let distance = 0;
  if (staggerFrom === 'last') {
    distance = total - 1 - index;
  } else if (staggerFrom === 'center') {
    const center = (total - 1) / 2;
    distance = Math.abs(index - center);
  } else if (staggerFrom === 'random') {
    distance = (Math.sin(index * 999) + 1) * 0.5 * total;
  } else if (typeof staggerFrom === 'number') {
    distance = Math.abs(index - staggerFrom);
  } else {
    distance = index; // 'first'
  }
  return distance * staggerDuration;
}

export default function ThreeDLetterSwap({
  children,
  label,
  secondLabel,
  rotateDirection = 'top',
  staggerDuration = 0.03,
  staggerFrom = 'first',
  className = '',
  mainClassName = '',
  frontFaceClassName = '',
  secondFaceClassName = '',
  as = 'span',
  transition
}) {
  const text = label || (typeof children === 'string' ? children : '');
  const altText = secondLabel || text;

  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  // Split text into words, preserving spaces
  const words = useMemo(() => {
    if (!text) return [];
    return text.split(' ').map((word) => ({
      word,
      chars: splitGraphemes(word)
    }));
  }, [text]);

  const altWords = useMemo(() => {
    if (!altText) return [];
    return altText.split(' ').map((word) => ({
      word,
      chars: splitGraphemes(word)
    }));
  }, [altText]);

  // Compute total characters count for stagger calculation
  const totalChars = useMemo(() => {
    return words.reduce((acc, w) => acc + w.chars.length, 0);
  }, [words]);

  const Component = as;

  let globalIndex = 0;
  const isBottom = rotateDirection === 'bottom';
  const targetRotation = isBottom ? 90 : -90;
  const secondFaceRotation = isBottom ? -90 : 90;

  const defaultTransition = {
    type: 'spring',
    stiffness: 200,
    damping: 18,
    mass: 0.7,
    ...transition
  };

  return (
    <Component
      ref={containerRef}
      className={`three-d-letter-swap-root ${mainClassName} ${className}`.trim()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered((prev) => !prev)}
    >
      {words.map((wordObj, wordIndex) => {
        const altWordObj = altWords[wordIndex] || wordObj;
        return (
          <React.Fragment key={wordIndex}>
            <span className="three-d-word">
              {wordObj.chars.map((char, charIndex) => {
                const altChar = altWordObj.chars[charIndex] || char;
                const charDelay = getStaggerDelay(
                  globalIndex++,
                  totalChars,
                  staggerFrom,
                  staggerDuration
                );

                return (
                  <span
                    key={charIndex}
                    className="three-d-letter-wrapper"
                    aria-hidden="true"
                  >
                    <motion.span
                      className="three-d-letter-cube"
                      animate={{
                        rotateX: isHovered ? targetRotation : 0,
                        rotateY: 0
                      }}
                      transition={{
                        ...defaultTransition,
                        delay: charDelay
                      }}
                    >
                      {/* Front face - Position relative gives natural character width and height */}
                      <span
                        className={`three-d-face three-d-face--front ${frontFaceClassName}`.trim()}
                      >
                        {char}
                      </span>
                      {/* Second / Swapped face - Absolutely positioned matching front face */}
                      <span
                        className={`three-d-face three-d-face--second ${secondFaceClassName}`.trim()}
                        style={{
                          transform: `rotateX(${secondFaceRotation}deg) translateZ(0.5em)`
                        }}
                      >
                        {altChar}
                      </span>
                    </motion.span>
                  </span>
                );
              })}
            </span>
            {wordIndex < words.length - 1 && (
              <span className="three-d-space">&nbsp;</span>
            )}
          </React.Fragment>
        );
      })}
      {/* Screen-reader accessible hidden text */}
      <span className="sr-only">{text}</span>
    </Component>
  );
}
