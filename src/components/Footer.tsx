import React from 'react';
import { birthdayConfig } from '../config';
import { Heart, ArrowUp, RefreshCw } from 'lucide-react';

interface FooterProps {
  onReopenInvitation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReopenInvitation }) => {
  const { footer } = birthdayConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#FAF4EB',
        borderTop: '1px solid rgba(231, 212, 189, 0.7)',
        paddingTop: '60px',
        paddingBottom: '48px',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <div className="container" style={{ maxWidth: '640px' }}>
        {/* Floating Shell Icon */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            backgroundColor: '#FFF9F1',
            border: '2px solid rgba(36, 107, 112, 0.25)',
            boxShadow: '0 8px 16px rgba(32, 60, 67, 0.08)',
            marginBottom: '24px',
            fontSize: '1.6rem',
          }}
        >
          🌻
        </div>

        {/* Closing Lines as required by prompt */}
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1.45rem',
            fontWeight: 700,
            color: '#203C43',
            marginBottom: '8px',
            lineHeight: 1.3,
          }}
        >
          {footer.line1}
        </p>

        <p
          className="font-hand"
          style={{
            fontSize: '1.8rem',
            color: '#EE9B87',
            fontWeight: 700,
            marginBottom: '32px',
          }}
        >
          “{footer.line2}”
        </p>

        {/* Footer actions */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '14px',
            marginBottom: '36px',
          }}
        >
          <button
            onClick={onReopenInvitation}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 18px',
              borderRadius: '999px',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: '#246B70',
              backgroundColor: 'rgba(197, 230, 221, 0.4)',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(197, 230, 221, 0.7)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(197, 230, 221, 0.4)')}
          >
            <RefreshCw size={13} />
            <span>{footer.replayText}</span>
          </button>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 18px',
              borderRadius: '999px',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: '#203C43',
              backgroundColor: '#FFF9F1',
              border: '1px solid rgba(231, 212, 189, 0.8)',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F6C9A7')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FFF9F1')}
          >
            <ArrowUp size={13} />
            <span>{footer.backToTop}</span>
          </button>
        </div>

        {/* Small copyright / footnote */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            fontSize: '0.86rem',
            color: '#8CA5AC',
          }}
        >
          <span>{footer.footnote}</span>
          <Heart size={13} fill="#EE9B87" color="#EE9B87" />
        </div>
      </div>
    </footer>
  );
};
