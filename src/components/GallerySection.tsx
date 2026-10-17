import React from 'react';
import { motion } from 'framer-motion';
import { birthdayConfig, type PhotoItem } from '../config';
import { Camera, Sparkles } from 'lucide-react';

interface GallerySectionProps {
  onPhotoClick: (photo: PhotoItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onPhotoClick }) => {
  const { gallery } = birthdayConfig;

  return (
    <section id="memories" className="gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="gallery-header">
          <div
            className="coastal-badge"
            style={{
              marginBottom: '16px',
              backgroundColor: 'rgba(197, 230, 221, 0.4)',
            }}
          >
            <Camera size={15} color="#246B70" />
            <span>{gallery.badgeText}</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontFamily: "'Playfair Display', Georgia, serif",
              color: '#203C43',
              marginBottom: '14px',
              fontWeight: 700,
            }}
          >
            {gallery.sectionTitle}
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#5E7E86',
              lineHeight: 1.6,
              marginBottom: '12px',
            }}
          >
            {gallery.sectionSubtitle}
          </p>

          <p
            className="font-hand"
            style={{
              fontSize: '1.3rem',
              color: '#EE9B87',
              fontWeight: 600,
            }}
          >
            ✨ {gallery.hintText}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {gallery.photos.map((photo, index) => {
            const isLandscape = photo.orientation === 'landscape';
            const tapeColors = ['washi-tape-teal', 'washi-tape-coral', 'washi-tape-lavender'];
            const tapeColor = tapeColors[index % tapeColors.length];
            const hasTape = index % 3 === 0 || index % 5 === 0;

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
                className={`polaroid-card ${isLandscape ? 'gallery-card-landscape' : ''}`}
                onClick={() => onPhotoClick(photo)}
                style={{
                  transform: `rotate(${photo.rotation}deg)`,
                  cursor: 'pointer',
                }}
              >
                {/* Washi Tape Accent */}
                {hasTape && (
                  <div
                    className={`washi-tape ${tapeColor} ${index % 2 === 0 ? 'tape-top-left' : 'tape-top-right'}`}
                    style={{ width: '80px', height: '22px' }}
                  />
                )}

                {/* Photo Container with fixed aspect ratio container to avoid layout jumps */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: isLandscape ? '66%' : '125%',
                    borderRadius: '3px',
                    overflow: 'hidden',
                    backgroundColor: '#F3E6D3',
                  }}
                >
                  <img
                    src={photo.thumb}
                    alt={photo.caption}
                    loading="lazy"
                    decoding="async"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.04)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />

                </div>

                {/* Polaroid Caption Area */}
                <div
                  style={{
                    paddingTop: '12px',
                    paddingBottom: '4px',
                    textAlign: 'center',
                  }}
                >
                  <p
                    className="font-hand"
                    style={{
                      fontSize: '1.25rem',
                      color: '#203C43',
                      fontWeight: 600,
                      lineHeight: 1.3,
                    }}
                  >
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Gallery End Note */}
        <div
          style={{
            marginTop: '56px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            color: '#246B70',
            fontWeight: 600,
            fontSize: '0.96rem',
          }}
        >
          <Sparkles size={16} />
          <span>{gallery.endNote}</span>
        </div>
      </div>

      {/* Coastal wave transition into Letter */}
      <div style={{ marginTop: '60px', lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', display: 'block' }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,45 C280,10 520,70 800,30 C1080,-10 1280,50 1440,20 L1440,80 L0,80 Z"
            fill="#FAF4EB"
          />
        </svg>
      </div>
    </section>
  );
};
