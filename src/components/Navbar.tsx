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
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo / Title */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="navbar-brand"
        >
          <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>🌻</span>
          <span>{birthdayConfig.recipientName}</span>
        </a>

        {/* Navigation Actions */}
        <nav className="navbar-nav" aria-label="Main Navigation">
          <button
            onClick={() => scrollTo('memories')}
            className="nav-pill nav-pill-photos"
            title="Photos dekhein"
          >
            <Camera size={15} />
            <span>Photos</span>
          </button>

          <button
            onClick={() => scrollTo('letter')}
            className="nav-pill nav-pill-note"
            title="Khaas note padhein"
          >
            <Mail size={15} />
            <span className="nav-text-desktop">Khaas Note</span>
            <span className="nav-text-mobile">Note</span>
          </button>

          <button
            onClick={() => scrollTo('make-a-wish')}
            className="nav-pill nav-pill-wish"
            title="Wish maangiye"
          >
            <Sparkles size={15} />
            <span className="nav-text-desktop">Wish Maangiye</span>
            <span className="nav-text-mobile">Wish</span>
          </button>

          {onReopenInvitation && (
            <button
              onClick={onReopenInvitation}
              className="nav-pill nav-pill-replay"
              title="Surprise dobara dekhein"
              aria-label="Surprise dobara dekhein"
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
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: isPlaying ? '#246B70' : 'rgba(36, 107, 112, 0.1)',
                color: isPlaying ? '#FFF9F1' : '#246B70',
                transition: 'all 0.2s',
                flexShrink: 0,
              }}
            >
              {isPlaying ? <Volume2 size={15} /> : <VolumeX size={15} />}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};
