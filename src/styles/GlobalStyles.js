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
    accent1: '#1d1d1f',
    accent2: '#6e6e73',
    accent3: '#34c759',
    accent4: '#1d1d1f',
    borderColor: 'rgba(255, 255, 255, 0.06)',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #1d1d1f, #6e6e73)',
    secondary: 'linear-gradient(135deg, #34c759, #1d1d1f)',
    glow: 'linear-gradient(135deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))',
  },
  fonts: {
    primary: "'Inter', sans-serif",
    display: "'Space Grotesk', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
};

export default theme;
