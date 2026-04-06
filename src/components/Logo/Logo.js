import React from 'react';
import './Logo.css';

const Logo = ({ size = 'md', showText = false, className = '' }) => {
  const sizes = {
    sm: { icon: 40, font: '0.9rem' },
    nav: { icon: 52, font: '1.1rem' },
    md: { icon: 48, font: '1.1rem' },
    lg: { icon: 64, font: '1.5rem' },
    xl: { icon: 84, font: '2rem' },
    loader: { icon: 110, font: '2.5rem' },
  };

  const s = sizes[size] || sizes.md;

  return (
    <span className={`logo-component logo-${size} ${className}`}>
      <span className="logo-icon-wrapper" style={{ width: s.icon, height: s.icon }}>
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="logo-svg"
        >
          <defs>
            <linearGradient id="logoGradBg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#12122a" />
              <stop offset="100%" stopColor="#0a0a18" />
            </linearGradient>
            <linearGradient id="logoGradText" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6c63ff" />
              <stop offset="100%" stopColor="#ff6b9d" />
            </linearGradient>
            <linearGradient id="logoGradBorder" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6c63ff" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ff6b9d" stopOpacity="0.6" />
            </linearGradient>
            <filter id="logoGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background */}
          <rect width="120" height="120" rx="28" fill="url(#logoGradBg)" />

          {/* Border */}
          <rect x="2" y="2" width="116" height="116" rx="26" fill="none" stroke="url(#logoGradBorder)" strokeWidth="2" />

          {/* Bracket < */}
          <path
            d="M24 60L42 40"
            stroke="url(#logoGradText)"
            strokeWidth="5"
            strokeLinecap="round"
            filter="url(#logoGlow)"
          />
          <path
            d="M24 60L42 80"
            stroke="url(#logoGradText)"
            strokeWidth="5"
            strokeLinecap="round"
            filter="url(#logoGlow)"
          />

          {/* P */}
          <text
            x="50"
            y="69"
            fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="900"
            fontSize="42"
            fill="url(#logoGradText)"
            filter="url(#logoGlow)"
          >
            P
          </text>

          {/* K */}
          <text
            x="76"
            y="69"
            fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="900"
            fontSize="42"
            fill="url(#logoGradText)"
            filter="url(#logoGlow)"
          >
            K
          </text>

          {/* Slash / */}
          <path
            d="M85 85L93 75"
            stroke="#4ecdc4"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Bracket > */}
          <path
            d="M102 60L88 44"
            stroke="url(#logoGradText)"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M102 60L88 76"
            stroke="url(#logoGradText)"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Accent dot */}
          <circle cx="104" cy="24" r="5" fill="#4ecdc4" opacity="0.7" />
          <circle cx="104" cy="24" r="2.5" fill="#4ecdc4" />
        </svg>
      </span>
      {showText && (
        <span className="logo-text-group">
          <span className="logo-text-name">Priya Kumari</span>
          <span className="logo-text-role">Software Developer</span>
        </span>
      )}
    </span>
  );
};

export default Logo;
