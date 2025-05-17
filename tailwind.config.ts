import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#FF10F0',
          blue: '#00FFFF',
          purple: '#B026FF',
          yellow: '#FFFF00',
        },
        sakura: {
          light: '#FFB7C5',
          DEFAULT: '#FF8FA3',
          dark: '#FF6B88',
        },
        cyber: {
          primary: '#00F3FF',
          secondary: '#FF003C',
          accent: '#FF9E00',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'sakura-fall': 'sakuraFall 10s linear infinite',
        'energy-wave': 'energyWave 2s ease-in-out infinite',
        'glitch': 'glitch 0.5s ease-in-out infinite',
        'cyber-pulse': 'cyberPulse 4s ease-in-out infinite',
        'power-up': 'powerUp 2s ease-in-out infinite',
        'chakra-spin': 'chakraSpin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            opacity: '1',
            filter: 'brightness(1) blur(0)',
          },
          '50%': { 
            opacity: '0.6',
            filter: 'brightness(1.2) blur(4px)',
          },
        },
        sakuraFall: {
          '0%': { 
            transform: 'translateY(-10vh) rotate(0deg)',
            opacity: '0',
          },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { 
            transform: 'translateY(110vh) rotate(720deg)',
            opacity: '0',
          },
        },
        energyWave: {
          '0%': { 
            transform: 'scale(1)',
            opacity: '0.8',
          },
          '50%': { 
            transform: 'scale(1.2)',
            opacity: '0.4',
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '0.8',
          },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        cyberPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px theme("colors.cyber.primary"), 0 0 40px theme("colors.cyber.primary")',
          },
          '50%': { 
            boxShadow: '0 0 40px theme("colors.cyber.secondary"), 0 0 80px theme("colors.cyber.secondary")',
          },
        },
        powerUp: {
          '0%': { 
            transform: 'scale(1) rotate(0deg)',
            filter: 'hue-rotate(0deg)',
          },
          '50%': { 
            transform: 'scale(1.2) rotate(180deg)',
            filter: 'hue-rotate(180deg)',
          },
          '100%': { 
            transform: 'scale(1) rotate(360deg)',
            filter: 'hue-rotate(360deg)',
          },
        },
        chakraSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(0deg, transparent 24%, rgba(0, 243, 255, 0.1) 25%, rgba(0, 243, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 243, 255, 0.1) 75%, rgba(0, 243, 255, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 243, 255, 0.1) 25%, rgba(0, 243, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 243, 255, 0.1) 75%, rgba(0, 243, 255, 0.1) 76%, transparent 77%, transparent)',
        'energy-burst': 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 30%, transparent 70%)',
      },
    },
  },
  plugins: [],
};

export default config; 