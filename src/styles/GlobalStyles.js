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
    accent1: '#c9a96e',
    accent2: '#d4b483',
    accent3: '#a8d8c8',
    accent4: '#c9a96e',
    borderColor: 'rgba(255, 255, 255, 0.06)',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #c9a96e, #d4b483)',
    secondary: 'linear-gradient(135deg, #a8d8c8, #c9a96e)',
    glow: 'linear-gradient(135deg, rgba(201, 169, 110, 0.15), rgba(212, 180, 131, 0.15))',
  },
  fonts: {
    primary: "'Inter', sans-serif",
    display: "'Space Grotesk', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
};

export default theme;
