import React, { useState, useEffect } from 'react';
import { birthdayConfig } from '../config';
import { Camera, Mail, Sparkles, Volume2, VolumeX } from 'lucide-react';

interface NavbarProps {
  onReopenInvitation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReopenInvitation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hasAudio, setHasAudio] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Check if background music exists at /music.mp3 or /bgm.mp3
    const audio = new Audio('/music.mp3');
    audio.loop = true;
    audio.oncanplay = () => {
      setHasAudio(true);
      setAudioElement(audio);
    };
    audio.onerror = () => {
      // Gracefully hide audio button if no music file is provided
      setHasAudio(false);
    };

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioElement) return;
    if (isPlaying) {
      audioElement.pause();
      setIsPlaying(false);
    } else {
      audioElement
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(255, 249, 241, 0.92)' : 'rgba(255, 249, 241, 0.6)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(231, 212, 189, 0.7)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 20px -2px rgba(32, 60, 67, 0.06)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Logo / Title */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#203C43',
            fontWeight: 700,
            fontSize: '1.05rem',
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          <span style={{ fontSize: '1.25rem' }}>🌻</span>
          <span>{birthdayConfig.recipientName}</span>
        </a>

        {/* Navigation Actions */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
          aria-label="Main Navigation"
        >
          <button
            onClick={() => scrollTo('memories')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '999px',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: '#246B70',
              backgroundColor: 'rgba(197, 230, 221, 0.35)',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(197, 230, 221, 0.6)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(197, 230, 221, 0.35)')}
          >
            <Camera size={15} />
            <span>Photos</span>
          </button>

          <button
            onClick={() => scrollTo('letter')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '999px',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: '#EE9B87',
              backgroundColor: 'rgba(238, 155, 135, 0.15)',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(238, 155, 135, 0.25)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(238, 155, 135, 0.15)')}
          >
            <Mail size={15} />
            <span>Khaas Note</span>
          </button>

          <button
            onClick={() => scrollTo('make-a-wish')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '999px',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: '#203C43',
              backgroundColor: 'rgba(246, 201, 167, 0.4)',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(246, 201, 167, 0.65)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(246, 201, 167, 0.4)')}
          >
            <Sparkles size={15} />
            <span>Wish Maangiye</span>
          </button>

          {onReopenInvitation && (
            <button
              onClick={onReopenInvitation}
              title="Surprise dobara dekhein"
              aria-label="Surprise dobara dekhein"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '8px 12px',
                borderRadius: '999px',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#246B70',
                backgroundColor: 'rgba(197, 230, 221, 0.25)',
                transition: 'background-color 0.2s',
              }}
            >
              <span>💌</span>
            </button>
          )}

          {/* Optional Audio Toggle if music is present */}
          {hasAudio && (
            <button
              onClick={toggleMusic}
              aria-label={isPlaying ? 'Gaana band karein' : 'Gaana chalu karein'}
              title={isPlaying ? 'Gaana band karein' : 'Gaana chalu karein'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: isPlaying ? '#246B70' : 'rgba(36, 107, 112, 0.1)',
                color: isPlaying ? '#FFF9F1' : '#246B70',
                transition: 'all 0.2s',
              }}
            >
              {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};
