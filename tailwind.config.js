/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5ff',
          100: '#d9e7ff',
          200: '#bcd3ff',
          300: '#8eb6ff',
          400: '#578eff',
          500: '#275df5', // Brand primary color
          600: '#1a46d3',
          700: '#1a38b2',
          800: '#1c3191',
          900: '#1d2d76',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'blue-sm': '0 2px 8px 0 rgba(39, 93, 245, 0.15)',
        'blue-md': '0 4px 14px 0 rgba(39, 93, 245, 0.25)',
        'blue-lg': '0 8px 20px 0 rgba(39, 93, 245, 0.30)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'slide-in': 'slide-in-bottom 0.5s ease-out forwards',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};