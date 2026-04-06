import { createGlobalStyle } from 'styled-components';

// We'll use a regular CSS file instead since we don't have styled-components
// This file exports the theme object

export const theme = {
  colors: {
    bgPrimary: '#0a0a0f',
    bgSecondary: '#0f0f1a',
    bgCard: '#161625',
    bgCardHover: '#1c1c30',
    textPrimary: '#ffffff',
    textSecondary: '#9898b0',
    textMuted: '#5a5a72',
    accent1: '#6c63ff',
    accent2: '#ff6b9d',
    accent3: '#4ecdc4',
    accent4: '#f7df1e',
    borderColor: 'rgba(255, 255, 255, 0.06)',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #6c63ff, #ff6b9d)',
    secondary: 'linear-gradient(135deg, #4ecdc4, #6c63ff)',
    glow: 'linear-gradient(135deg, rgba(108, 99, 255, 0.15), rgba(255, 107, 157, 0.15))',
  },
  fonts: {
    primary: "'Inter', sans-serif",
    display: "'Space Grotesk', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
};

export default theme;
