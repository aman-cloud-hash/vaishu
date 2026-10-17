import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { birthdayConfig } from '../config';
import { Sparkles, Heart } from 'lucide-react';

interface InvitationGateProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const InvitationGate: React.FC<InvitationGateProps> = ({ isOpen, onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const { invitation, recipientName } = birthdayConfig;

  // Whenever the invitation gate is reopened (isOpen becomes false), reset the button state
  useEffect(() => {
    if (!isOpen) {
      setIsOpening(false);
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpening(true);

    // Fire gentle celebratory confetti burst in coastal colors
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#EE9B87', '#F6C9A7', '#246B70', '#C5E6DD', '#D7CCE8', '#F3E6D3'],
      ticks: 200,
    });

    setTimeout(() => {
      onOpen();
      setIsOpening(false);
    }, 700);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="invitation-gate"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backgroundColor: '#FAF4EB',
            backgroundImage: `
              radial-gradient(circle at 15% 20%, rgba(197, 230, 221, 0.45) 0%, transparent 45%),
              radial-gradient(circle at 85% 75%, rgba(246, 201, 167, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(255, 249, 241, 0.8) 0%, transparent 60%)
            `,
          }}
        >
          {/* Card Envelope Container */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              maxWidth: '460px',
              width: '100%',
              backgroundColor: '#FFF9F1',
              borderRadius: '24px',
              padding: '40px 32px',
              textAlign: 'center',
              boxShadow: '0 24px 60px -12px rgba(32, 60, 67, 0.18), 0 8px 24px -4px rgba(32, 60, 67, 0.08)',
              border: '2px solid rgba(231, 212, 189, 0.6)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Washi Tape at top */}
            <div
              className="washi-tape washi-tape-teal tape-top-center"
              style={{ width: '110px', height: '28px', top: '-14px' }}
            />

            {/* Stamp Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                backgroundColor: 'rgba(197, 230, 221, 0.35)',
                color: '#246B70',
                borderRadius: '999px',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              <Sparkles size={14} />
              <span>{invitation.badgeText}</span>
            </div>

            {/* Teaser text */}
            <p
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: '1.45rem',
                color: '#EE9B87',
                marginBottom: '10px',
                fontWeight: 600,
              }}
            >
              {invitation.teaser}
            </p>

            {/* Main Invitation Headline */}
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '2rem',
                color: '#203C43',
                lineHeight: 1.3,
                marginBottom: '16px',
                fontWeight: 700,
              }}
            >
              {invitation.headline}
            </h1>

            <p
              style={{
                fontSize: '0.96rem',
                color: '#5E7E86',
                lineHeight: 1.6,
                marginBottom: '32px',
              }}
            >
              Aapki pyaari photos aur dil se likhe messages ke saath sajaya gaya hai, khaas{' '}
              <strong style={{ color: '#246B70', fontWeight: 600 }}>{recipientName}</strong> ke liye.
            </p>

            {/* Interactive Open Button */}
            <motion.button
              onClick={handleOpen}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={isOpening}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
                padding: '16px 28px',
                backgroundColor: '#246B70',
                color: '#FFF9F1',
                borderRadius: '16px',
                fontSize: '1.08rem',
                fontWeight: 600,
                boxShadow: '0 8px 20px -4px rgba(36, 107, 112, 0.45)',
                transition: 'background-color 0.2s ease, transform 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1A5155';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#246B70';
              }}
              aria-label="Surprise dekhein"
            >
              <span>{isOpening ? 'Surprise open ho raha hai...' : invitation.buttonText}</span>
            </motion.button>

            {/* Soft decorative footer note */}
            <div
              style={{
                marginTop: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                fontSize: '0.85rem',
                color: '#8CA5AC',
              }}
            >
              <Heart size={13} fill="#EE9B87" color="#EE9B87" />
              <span>Shuru karne ke liye tap kijiye ✨</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
