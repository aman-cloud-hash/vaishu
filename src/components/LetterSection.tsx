import React from 'react';
import { motion } from 'framer-motion';
import { birthdayConfig } from '../config';
import { Mail, Heart, Sparkles, Feather } from 'lucide-react';

export const LetterSection: React.FC = () => {
  const { letter, recipientName, senderName } = birthdayConfig;

  const renderFormattedParagraph = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} style={{ color: '#246B70', fontWeight: 700 }}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <section
      id="letter"
      style={{
        backgroundColor: '#FAF4EB',
        paddingTop: '60px',
        paddingBottom: '90px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ maxWidth: '820px' }}>
        {/* Section Badge & Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div
            className="coastal-badge"
            style={{
              marginBottom: '16px',
              backgroundColor: 'rgba(238, 155, 135, 0.2)',
              color: '#D77861',
              borderColor: 'rgba(238, 155, 135, 0.4)',
            }}
          >
            <Feather size={15} />
            <span>{letter.subheading}</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontFamily: "'Playfair Display', Georgia, serif",
              color: '#203C43',
              marginBottom: '10px',
              fontWeight: 700,
            }}
          >
            {letter.heading}
          </h2>

          <p
            style={{
              color: '#5E7E86',
              fontSize: '1rem',
            }}
          >
            Khaas {recipientName} ke liye ek dil se likha hua sandesh 💌
          </p>
        </div>

        {/* Parchment Stationery Letter Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            backgroundColor: '#FFF9F1',
            borderRadius: '24px',
            padding: 'clamp(32px, 6vw, 64px)',
            boxShadow: 'var(--shadow-letter)',
            border: '2px solid rgba(231, 212, 189, 0.7)',
            position: 'relative',
          }}
        >
          {/* Decorative Washi Tapes */}
          <div
            className="washi-tape washi-tape-teal tape-top-left"
            style={{ width: '90px', height: '24px', top: '-12px', left: '30px', transform: 'rotate(-4deg)' }}
          />
          <div
            className="washi-tape washi-tape-coral tape-top-right"
            style={{ width: '90px', height: '24px', top: '-12px', right: '30px', transform: 'rotate(5deg)' }}
          />

          {/* Letter Header Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px dashed rgba(36, 107, 112, 0.25)',
              paddingBottom: '20px',
              marginBottom: '28px',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={18} color="#246B70" />
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 600,
                  fontSize: '1.15rem',
                  color: '#203C43',
                }}
              >
                {letter.salutation}
              </span>
            </div>

            <div
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: '1.25rem',
                color: '#EE9B87',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Sparkles size={15} />
              <span>{letter.dateBadge}</span>
            </div>
          </div>

          {/* Letter Body Paragraphs */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              fontSize: 'clamp(1.05rem, 2.2vw, 1.15rem)',
              lineHeight: 1.8,
              color: '#203C43',
            }}
          >
            {letter.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                style={{
                  fontWeight: idx === 0 ? 600 : 400,
                  color: idx === 0 ? '#246B70' : '#203C43',
                  whiteSpace: 'pre-line',
                }}
              >
                {renderFormattedParagraph(paragraph)}
              </p>
            ))}
          </div>

          {/* Letter Signoff & Wax Seal Motif */}
          <div
            style={{
              marginTop: '44px',
              paddingTop: '24px',
              borderTop: '1px dashed rgba(36, 107, 112, 0.25)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '24px',
            }}
          >
            {/* Signature text */}
            <div>
              <p
                style={{
                  fontSize: '0.96rem',
                  color: '#5E7E86',
                  marginBottom: '4px',
                }}
              >
                {letter.closing}
              </p>
              <p
                className="font-hand"
                style={{
                  fontSize: '2.2rem',
                  color: '#246B70',
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                — {senderName}
              </p>
            </div>

            {/* Coastal Beach Shell Stamp Emblem */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'rgba(255, 249, 241, 0.95)',
                border: '1.5px solid #EE9B87',
                padding: '8px 16px',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(238, 155, 135, 0.15)',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#EE9B87',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFF9F1',
                }}
              >
                <Heart size={16} fill="#FFF9F1" />
              </div>
              <div>
                <p
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#203C43',
                  }}
                >
                  {letter.stampTag}
                </p>
                <p
                  className="font-hand"
                  style={{
                    fontSize: '0.98rem',
                    color: '#EE9B87',
                    fontWeight: 600,
                  }}
                >
                  {letter.stampSub}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave transition into Make a Wish */}
      <div style={{ marginTop: '70px', lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', display: 'block' }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,35 C360,65 600,10 900,45 C1200,80 1340,25 1440,35 L1440,80 L0,80 Z"
            fill="#FFF9F1"
          />
        </svg>
      </div>
    </section>
  );
};
