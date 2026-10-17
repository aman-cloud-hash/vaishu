import React, { useState } from 'react';
import { birthdayConfig, type PhotoItem } from './config';
import { InvitationGate } from './components/InvitationGate';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { GallerySection } from './components/GallerySection';
import { LetterSection } from './components/LetterSection';
import { InteractiveSurprise } from './components/InteractiveSurprise';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';

export const App: React.FC = () => {
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const handleReopenInvitation = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsSurpriseOpen(false);
  };

  return (
    <div className="birthday-app" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* 1. Opening Invitation Gate / Envelope Screen */}
      <InvitationGate
        isOpen={isSurpriseOpen}
        onOpen={() => setIsSurpriseOpen(true)}
      />

      {/* 2. Main Scrapbook Website (Revealed smoothly) */}
      <div
        style={{
          opacity: isSurpriseOpen ? 1 : 0,
          pointerEvents: isSurpriseOpen ? 'auto' : 'none',
          transition: 'opacity 0.6s ease-in-out',
        }}
      >
        <Navbar onReopenInvitation={handleReopenInvitation} />

        <main>
          {/* Hero Section with Editorial Collage */}
          <HeroSection onPhotoClick={(photo) => setActivePhoto(photo)} />

          {/* Memories Section: Complete Photo Collection */}
          <GallerySection onPhotoClick={(photo) => setActivePhoto(photo)} />

          {/* Personal Birthday Letter */}
          <LetterSection />

          {/* Interactive Birthday Cake & Wish */}
          <InteractiveSurprise />
        </main>

        {/* Footer */}
        <Footer onReopenInvitation={handleReopenInvitation} />
      </div>

      {/* 3. Fullscreen Lightbox Modal */}
      <LightboxModal
        photo={activePhoto}
        photos={birthdayConfig.gallery.photos}
        onClose={() => setActivePhoto(null)}
        onNavigate={(photo) => setActivePhoto(photo)}
      />
    </div>
  );
};

export default App;
