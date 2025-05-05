/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        'background-alt': '#1E1E1E',
        primary: {
          DEFAULT: '#00BFFF',
          hover: '#0099CC',
          light: '#33CCFF',
          dark: '#0077B3'
        },
        secondary: {
          DEFAULT: '#39FF14',
          hover: '#32D912',
          light: '#66FF4D',
          dark: '#2CC60F'
        },
        accent: '#FF3E4D',
        success: '#00E676',
        warning: '#FFAB00',
        error: '#FF5252',
        text: {
          primary: '#FFFFFF',
          secondary: '#B3B3B3',
          muted: '#6C7293'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate'
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px rgba(0, 191, 255, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(0, 191, 255, 1), 0 0 30px rgba(57, 255, 20, 0.8)' }
        }
      }
    },
  },
  plugins: [],
};