import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { birthdayConfig } from '../config';
import { Sparkles, RotateCcw } from 'lucide-react';

export const InteractiveSurprise: React.FC = () => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [isBlowing, setIsBlowing] = useState(false);
  const [wishMade, setWishMade] = useState(false);

  const { interactiveSurprise, recipientName } = birthdayConfig;

  const extinguishCandles = () => {
    if (!candlesLit || isBlowing) return;
    setIsBlowing(true);

    // After a tiny delay (breath out), extinguish flames and pop confetti!
    setTimeout(() => {
      setCandlesLit(false);
      setIsBlowing(false);
      setWishMade(true);

      // Trigger celebratory confetti in the website's beach palette
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.65 },
        colors: ['#EE9B87', '#F6C9A7', '#246B70', '#C5E6DD', '#D7CCE8', '#FFF9F1'],
        ticks: 240,
        gravity: 0.9,
      });
    }, 400);
  };

  const relightCandles = () => {
    setCandlesLit(true);
    setWishMade(false);
  };

  return (
    <section
      id="make-a-wish"
      style={{
        backgroundColor: '#FFF9F1',
        paddingTop: '60px',
        paddingBottom: '90px',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <div className="container" style={{ maxWidth: '680px' }}>
        {/* Section Badge */}
        <div
          className="coastal-badge"
          style={{
            marginBottom: '16px',
            backgroundColor: 'rgba(246, 201, 167, 0.45)',
            color: '#203C43',
          }}
        >
          <Sparkles size={15} color="#EE9B87" />
          <span>{interactiveSurprise.badgeText}</span>
        </div>

        {/* Section Heading */}
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontFamily: "'Playfair Display', Georgia, serif",
            color: '#203C43',
            marginBottom: '12px',
            fontWeight: 700,
          }}
        >
          {interactiveSurprise.heading}
        </h2>

        {/* Instruction */}
        <p
          className="font-hand"
          style={{
            fontSize: '1.65rem',
            color: '#EE9B87',
            marginBottom: '36px',
            fontWeight: 700,
          }}
        >
          “{interactiveSurprise.instruction}”
        </p>

        {/* Cake Container Box */}
        <div
          style={{
            backgroundColor: '#FAF4EB',
            borderRadius: '28px',
            padding: '48px 24px 36px 24px',
            boxShadow: 'var(--shadow-md)',
            border: '2px solid rgba(231, 212, 189, 0.7)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Subtle Washi Tape */}
          <div
            className="washi-tape washi-tape-lavender tape-top-center"
            style={{ width: '100px', height: '24px', top: '-12px' }}
          />

          {/* Interactive Illustrated Birthday Cake SVG */}
          <div
            onClick={extinguishCandles}
            role="button"
            tabIndex={0}
            aria-label={interactiveSurprise.buttonAria}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                extinguishCandles();
              }
            }}
            style={{
              cursor: candlesLit ? 'pointer' : 'default',
              position: 'relative',
              outline: 'none',
              transform: 'scale(1)',
              transition: 'transform 0.2s ease',
            }}
            title={candlesLit ? 'Tap the candles to make a wish!' : 'Candles blown!'}
          >
            <svg
              width="240"
              height="200"
              viewBox="0 0 240 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ overflow: 'visible' }}
            >
              {/* Cake Stand / Plate */}
              <ellipse cx="120" cy="184" rx="85" ry="12" fill="#E7D4BD" />
              <ellipse cx="120" cy="180" rx="80" ry="10" fill="#FFF9F1" stroke="#246B70" strokeWidth="2" />

              {/* Cake Bottom Tier */}
              <rect x="55" y="125" width="130" height="48" rx="6" fill="#F3E6D3" stroke="#203C43" strokeWidth="2" />
              {/* Frosting drips bottom tier */}
              <path
                d="M55 136 C65 144, 75 144, 85 136 C95 144, 105 144, 115 136 C125 144, 135 144, 145 136 C155 144, 165 144, 175 136 C180 140, 183 138, 185 136 L185 125 L55 125 Z"
                fill="#FFF9F1"
              />

              {/* Cake Top Tier */}
              <rect x="75" y="85" width="90" height="42" rx="5" fill="#F6C9A7" stroke="#203C43" strokeWidth="2" />
              {/* Frosting top tier */}
              <path
                d="M75 95 C82 102, 90 102, 97 95 C105 102, 112 102, 120 95 C128 102, 135 102, 143 95 C150 102, 158 102, 165 95 L165 85 L75 85 Z"
                fill="#FFF9F1"
              />

              {/* Sprinkles on cake */}
              <circle cx="85" cy="112" r="2.5" fill="#EE9B87" />
              <circle cx="105" cy="116" r="2.5" fill="#246B70" />
              <circle cx="130" cy="110" r="2.5" fill="#C5E6DD" />
              <circle cx="150" cy="114" r="2.5" fill="#D7CCE8" />
              <circle cx="70" cy="155" r="3" fill="#EE9B87" />
              <circle cx="95" cy="152" r="3" fill="#246B70" />
              <circle cx="120" cy="158" r="3" fill="#F6C9A7" />
              <circle cx="145" cy="153" r="3" fill="#D7CCE8" />
              <circle cx="168" cy="156" r="3" fill="#C5E6DD" />

              {/* Candles (3 Candles) */}
              {/* Candle 1 (Left) */}
              <rect x="92" y="55" width="8" height="30" rx="3" fill="#C5E6DD" stroke="#246B70" strokeWidth="1.5" />
              <line x1="96" y1="55" x2="96" y2="48" stroke="#203C43" strokeWidth="2" strokeLinecap="round" />

              {/* Candle 2 (Center) */}
              <rect x="116" y="50" width="8" height="35" rx="3" fill="#EE9B87" stroke="#D77861" strokeWidth="1.5" />
              <line x1="120" y1="50" x2="120" y2="42" stroke="#203C43" strokeWidth="2" strokeLinecap="round" />

              {/* Candle 3 (Right) */}
              <rect x="140" y="55" width="8" height="30" rx="3" fill="#D7CCE8" stroke="#8E7BB0" strokeWidth="1.5" />
              <line x1="144" y1="55" x2="144" y2="48" stroke="#203C43" strokeWidth="2" strokeLinecap="round" />

              {/* Flames or Smoke */}
              {candlesLit ? (
                <g>
                  {/* Left Flame */}
                  <g className="candle-flame" style={{ transformOrigin: '96px 48px' }}>
                    <ellipse cx="96" cy="40" rx="5.5" ry="8" fill="#F6C9A7" />
                    <ellipse cx="96" cy="41" rx="3" ry="5" fill="#EE9B87" />
                  </g>
                  {/* Center Flame */}
                  <g
                    className="candle-flame"
                    style={{ transformOrigin: '120px 42px', animationDelay: '-0.6s' }}
                  >
                    <ellipse cx="120" cy="33" rx="6.5" ry="10" fill="#F6C9A7" />
                    <ellipse cx="120" cy="34" rx="3.5" ry="6" fill="#EE9B87" />
                  </g>
                  {/* Right Flame */}
                  <g
                    className="candle-flame"
                    style={{ transformOrigin: '144px 48px', animationDelay: '-1.2s' }}
                  >
                    <ellipse cx="144" cy="40" rx="5.5" ry="8" fill="#F6C9A7" />
                    <ellipse cx="144" cy="41" rx="3" ry="5" fill="#EE9B87" />
                  </g>
                </g>
              ) : (
                <g>
                  {/* Smoke Puffs */}
                  <circle cx="96" cy="38" r="4" fill="#A5C4C0" className="smoke-puff" />
                  <circle cx="120" cy="32" r="5" fill="#A5C4C0" className="smoke-puff" style={{ animationDelay: '0.1s' }} />
                  <circle cx="144" cy="38" r="4" fill="#A5C4C0" className="smoke-puff" style={{ animationDelay: '0.2s' }} />
                </g>
              )}
            </svg>
          </div>

          {/* Interactive Button */}
          <div style={{ marginTop: '24px' }}>
            {candlesLit ? (
              <motion.button
                onClick={extinguishCandles}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 28px',
                  backgroundColor: '#246B70',
                  color: '#FFF9F1',
                  borderRadius: '14px',
                  fontSize: '0.98rem',
                  fontWeight: 600,
                  boxShadow: '0 6px 18px -3px rgba(36, 107, 112, 0.4)',
                  cursor: 'pointer',
                }}
              >
                <span>{interactiveSurprise.actionButtonText}</span>
              </motion.button>
            ) : (
              <motion.button
                onClick={relightCandles}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 22px',
                  backgroundColor: 'rgba(36, 107, 112, 0.1)',
                  color: '#246B70',
                  borderRadius: '12px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  border: '1px solid rgba(36, 107, 112, 0.25)',
                  cursor: 'pointer',
                }}
              >
                <RotateCcw size={15} />
                <span>{interactiveSurprise.resetButtonText}</span>
              </motion.button>
            )}
          </div>

          {/* Revealed Secret Message */}
          <AnimatePresence>
            {wishMade && (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                style={{
                  marginTop: '28px',
                  padding: '18px 24px',
                  backgroundColor: '#FFF9F1',
                  borderRadius: '18px',
                  border: '2px solid #246B70',
                  boxShadow: '0 8px 20px -4px rgba(36, 107, 112, 0.25)',
                  maxWidth: '480px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Sparkles size={18} color="#EE9B87" />
                  <span
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 700,
                      color: '#203C43',
                      fontSize: '1.1rem',
                    }}
                  >
                    {interactiveSurprise.wishLockedTitle}
                  </span>
                  <Sparkles size={18} color="#EE9B87" />
                </div>
                <p
                  className="font-hand"
                  style={{
                    fontSize: '1.42rem',
                    color: '#246B70',
                    fontWeight: 700,
                    lineHeight: 1.35,
                  }}
                >
                  {interactiveSurprise.revealedMessage}
                </p>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#5E7E86',
                    marginTop: '8px',
                  }}
                >
                  Aapki har wish poori ho aur ye saal aapke liye dher saari khushiyan laye, {recipientName}! 💛
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
