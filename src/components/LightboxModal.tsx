import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PhotoItem } from '../config';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  photo: PhotoItem | null;
  photos: PhotoItem[];
  onClose: () => void;
  onNavigate: (photo: PhotoItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  photos,
  onClose,
  onNavigate,
}) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const thumbStripRef = useRef<HTMLDivElement>(null);

  const currentIndex = photo ? photos.findIndex((p) => p.id === photo.id) : -1;
  const totalCount = photos.length;

  const goToNext = useCallback(() => {
    if (currentIndex >= 0 && currentIndex < totalCount - 1) {
      onNavigate(photos[currentIndex + 1]);
    } else if (currentIndex === totalCount - 1) {
      onNavigate(photos[0]); // Wrap around
    }
  }, [currentIndex, totalCount, onNavigate, photos]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(photos[currentIndex - 1]);
    } else if (currentIndex === 0) {
      onNavigate(photos[totalCount - 1]); // Wrap around
    }
  }, [currentIndex, totalCount, onNavigate, photos]);

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    if (!photo) return;

    // Lock background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photo, onClose, goToNext, goToPrev]);

  // Auto scroll thumbnail strip to keep active photo in view
  useEffect(() => {
    if (!thumbStripRef.current || !photo) return;
    const activeThumb = thumbStripRef.current.querySelector(
      `[data-thumb-id="${photo.id}"]`
    ) as HTMLElement | null;
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [photo]);

  // Touch Swipe Handlers (Mobile Swipe Navigation)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next
      goToNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Prev
      goToPrev();
    }
  };

  if (!photo) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 10000,
          backgroundColor: 'rgba(20, 36, 40, 0.94)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Header Bar */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            width: '100%',
            maxWidth: '1200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 12px',
            color: '#FFF9F1',
            zIndex: 10,
          }}
        >
          {/* Header Pill without numbers */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(255, 249, 241, 0.15)',
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '0.88rem',
              fontWeight: 600,
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: '0.04em',
            }}
          >
            <span>✨ Vaishu’s Memories</span>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Band karein"
            title="Band karein"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 249, 241, 0.2)',
              color: '#FFF9F1',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#EE9B87';
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 249, 241, 0.2)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Central Display: Nav Buttons & Image (Without Forced Cropping!) */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1100px',
            flex: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '10px 0',
            minHeight: 0,
          }}
        >
          {/* Previous Button */}
          <button
            onClick={goToPrev}
            aria-label="Pichhli photo"
            title="Pichhli photo"
            style={{
              position: 'absolute',
              left: '12px',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 249, 241, 0.2)',
              backdropFilter: 'blur(4px)',
              color: '#FFF9F1',
              cursor: 'pointer',
              transition: 'all 0.2s',
              border: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#246B70';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 249, 241, 0.2)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <ChevronLeft size={26} />
          </button>

          {/* Active Photo Container */}
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            style={{
              maxHeight: 'calc(75vh - 70px)',
              maxWidth: '92%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              style={{
                maxHeight: 'calc(72vh - 80px)',
                maxWidth: '100%',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
              }}
            />

            {/* Photo Caption */}
            <p
              className="font-hand"
              style={{
                marginTop: '12px',
                color: '#FFF9F1',
                fontSize: '1.45rem',
                textAlign: 'center',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)',
                fontWeight: 600,
              }}
            >
              {photo.caption}
            </p>
          </motion.div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            aria-label="Agli photo"
            title="Agli photo"
            style={{
              position: 'absolute',
              right: '12px',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 249, 241, 0.2)',
              backdropFilter: 'blur(4px)',
              color: '#FFF9F1',
              cursor: 'pointer',
              transition: 'all 0.2s',
              border: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#246B70';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 249, 241, 0.2)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <ChevronRight size={26} />
          </button>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div
          onClick={(e) => e.stopPropagation()}
          ref={thumbStripRef}
          style={{
            width: '100%',
            maxWidth: '860px',
            overflowX: 'auto',
            display: 'flex',
            gap: '8px',
            padding: '8px 4px',
            scrollbarWidth: 'thin',
            zIndex: 10,
          }}
        >
          {photos.map((p) => {
            const isSelected = p.id === photo.id;
            return (
              <button
                key={p.id}
                data-thumb-id={p.id}
                onClick={() => onNavigate(p)}
                style={{
                  flexShrink: 0,
                  width: '48px',
                  height: '48px',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  padding: 0,
                  border: isSelected ? '2px solid #EE9B87' : '1px solid rgba(255,255,255,0.2)',
                  opacity: isSelected ? 1 : 0.5,
                  transform: isSelected ? 'scale(1.1)' : 'scale(1)',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                  backgroundColor: '#203C43',
                }}
              >
                <img
                  src={p.thumb}
                  alt={p.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </button>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
