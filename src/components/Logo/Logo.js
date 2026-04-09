import './Logo.css';

const Logo = ({ size = 'md', showText = false, className = '' }) => {
  const sizes = {
    sm: { icon: 40 },
    nav: { icon: 44 },
    md: { icon: 48 },
    lg: { icon: 56 },
    xl: { icon: 84 },
    loader: { icon: 72 },
  };

  const s = sizes[size] || sizes.md;

  return (
    <span className={`logo-component logo-${size} ${className}`}>
      <span className="logo-icon-wrapper" style={{ width: s.icon, height: s.icon }}>
        <span className="logo-mark">PK</span>
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
