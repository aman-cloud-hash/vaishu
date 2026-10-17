import React from 'react';
import { motion } from 'framer-motion';
import { birthdayConfig, type PhotoItem } from '../config';
import { Camera, Mail, Heart, Sparkles, Compass } from 'lucide-react';

interface HeroSectionProps {
  onPhotoClick: (photo: PhotoItem) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPhotoClick }) => {
  const { hero, gallery } = birthdayConfig;

  // Retrieve the 5 featured photos from the gallery
  const featuredPhotos = hero.featuredPhotoIds
    .map((id) => gallery.photos.find((p) => p.id === id))
    .filter((p): p is PhotoItem => p !== undefined);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="top"
      style={{
        paddingTop: '110px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Typography & Intent */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Coastal Badge */}
            <div
              className="coastal-badge"
              style={{
                marginBottom: '20px',
                backgroundColor: 'rgba(255, 249, 241, 0.95)',
              }}
            >
              <Compass size={15} color="#246B70" />
              <span>{hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontFamily: "'Playfair Display', Georgia, serif",
                color: '#203C43',
                lineHeight: 1.15,
                marginBottom: '20px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              {hero.headline}
            </h1>

            {/* Supporting Description */}
            <p
              style={{
                fontSize: 'clamp(1.08rem, 2vw, 1.25rem)',
                color: '#203C43',
                lineHeight: 1.6,
                marginBottom: '32px',
                maxWidth: '520px',
                fontWeight: 500,
              }}
            >
              {hero.supportingLine}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                marginBottom: '32px',
              }}
            >
              <button
                onClick={() => scrollTo('memories')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 28px',
                  backgroundColor: '#246B70',
                  color: '#FFF9F1',
                  borderRadius: '14px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  boxShadow: '0 8px 20px -4px rgba(36, 107, 112, 0.35)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1A5155';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#246B70';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Camera size={18} />
                <span>{hero.primaryCta}</span>
              </button>

              <button
                onClick={() => scrollTo('letter')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 28px',
                  backgroundColor: '#FFF9F1',
                  color: '#203C43',
                  borderRadius: '14px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  border: '1.5px solid rgba(36, 107, 112, 0.25)',
                  boxShadow: '0 4px 12px rgba(32, 60, 67, 0.05)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FDF4EC';
                  e.currentTarget.style.borderColor = '#EE9B87';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFF9F1';
                  e.currentTarget.style.borderColor = 'rgba(36, 107, 112, 0.25)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Mail size={18} color="#EE9B87" />
                <span>{hero.secondaryCta}</span>
              </button>
            </div>

            {/* Small scrapbook detail */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: "'Caveat', cursive",
                fontSize: '1.3rem',
                color: '#EE9B87',
                fontWeight: 600,
              }}
            >
              <Sparkles size={16} />
              <span>{hero.scrollHint}</span>
            </div>
          </motion.div>

          {/* Right Column: Editorial Collage with 5 Photos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              minHeight: '440px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Collage Background Elements */}
            <div
              style={{
                position: 'absolute',
                inset: '5%',
                borderRadius: '30px',
                backgroundColor: 'rgba(197, 230, 221, 0.3)',
                transform: 'rotate(-2deg)',
                border: '2px dashed rgba(36, 107, 112, 0.2)',
                zIndex: 0,
              }}
            />

            {/* Collage Photos Layout */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '460px',
                height: '420px',
                zIndex: 1,
              }}
            >
              {/* Photo 1 (Center Main) */}
              {featuredPhotos[0] && (
                <div
                  className="polaroid-card"
                  onClick={() => onPhotoClick(featuredPhotos[0])}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '50%',
                    transform: 'translateX(-50%) rotate(1deg)',
                    width: '210px',
                    cursor: 'pointer',
                    zIndex: 5,
                  }}
                  title="Click to view full photo"
                >
                  <div className="washi-tape washi-tape-coral tape-top-center" />
                  <div
                    style={{
                      width: '100%',
                      height: '240px',
                      borderRadius: '2px',
                      overflow: 'hidden',
                      backgroundColor: '#E7D4BD',
                    }}
                  >
                    <img
                      src={featuredPhotos[0].thumb}
                      alt={featuredPhotos[0].caption}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="eager"
                    />
                  </div>
                  <p
                    className="font-hand"
                    style={{
                      textAlign: 'center',
                      marginTop: '8px',
                      fontSize: '1.15rem',
                      color: '#203C43',
                      fontWeight: 600,
                    }}
                  >
                    Ye smile toh banti hai! ✨
                  </p>
                </div>
              )}

              {/* Photo 2 (Left tilted) */}
              {featuredPhotos[1] && (
                <div
                  className="polaroid-card"
                  onClick={() => onPhotoClick(featuredPhotos[1])}
                  style={{
                    position: 'absolute',
                    top: '80px',
                    left: '0',
                    transform: 'rotate(-9deg)',
                    width: '160px',
                    cursor: 'pointer',
                    zIndex: 4,
                  }}
                  title="Poori photo dekhne ke liye tap kijiye"
                >
                  <div className="washi-tape washi-tape-teal tape-top-left" style={{ width: '65px' }} />
                  <div
                    style={{
                      width: '100%',
                      height: '180px',
                      borderRadius: '2px',
                      overflow: 'hidden',
                      backgroundColor: '#E7D4BD',
                    }}
                  >
                    <img
                      src={featuredPhotos[1].thumb}
                      alt={featuredPhotos[1].caption}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="eager"
                    />
                  </div>
                  <p
                    className="font-hand"
                    style={{
                      textAlign: 'center',
                      marginTop: '6px',
                      fontSize: '1rem',
                      color: '#246B70',
                      fontWeight: 600,
                    }}
                  >
                    Main character moment ✨
                  </p>
                </div>
              )}

              {/* Photo 3 (Right tilted) */}
              {featuredPhotos[2] && (
                <div
                  className="polaroid-card"
                  onClick={() => onPhotoClick(featuredPhotos[2])}
                  style={{
                    position: 'absolute',
                    top: '60px',
                    right: '5px',
                    transform: 'rotate(8deg)',
                    width: '165px',
                    cursor: 'pointer',
                    zIndex: 4,
                  }}
                  title="Poori photo dekhne ke liye tap kijiye"
                >
                  <div className="washi-tape washi-tape-lavender tape-top-right" style={{ width: '65px' }} />
                  <div
                    style={{
                      width: '100%',
                      height: '190px',
                      borderRadius: '2px',
                      overflow: 'hidden',
                      backgroundColor: '#E7D4BD',
                    }}
                  >
                    <img
                      src={featuredPhotos[2].thumb}
                      alt={featuredPhotos[2].caption}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="eager"
                    />
                  </div>
                  <p
                    className="font-hand"
                    style={{
                      textAlign: 'center',
                      marginTop: '6px',
                      fontSize: '1rem',
                      color: '#EE9B87',
                      fontWeight: 600,
                    }}
                  >
                    Bas aise hi khush rahiye 💛
                  </p>
                </div>
              )}

              {/* Scrapbook Beach Stamp Accent */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '15px',
                  right: '30px',
                  backgroundColor: '#FFF9F1',
                  border: '2px solid #246B70',
                  borderRadius: '12px',
                  padding: '8px 14px',
                  transform: 'rotate(-4deg)',
                  boxShadow: '0 4px 10px rgba(32, 60, 67, 0.08)',
                  zIndex: 6,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Heart size={14} fill="#EE9B87" color="#EE9B87" />
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#203C43',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Sabse Khaas Dost • Vaishu
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Coastal wave transition into memories */}
      <div style={{ marginTop: '50px', lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', display: 'block' }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,32 C320,70 480,10 720,40 C960,70 1120,20 1440,48 L1440,80 L0,80 Z"
            fill="#FFF9F1"
            opacity="0.8"
          />
        </svg>
      </div>
    </section>
  );
};
