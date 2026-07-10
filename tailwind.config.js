/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(25 95% 50% / 1)',
        'primary-light': 'hsl(25 95% 60% / 1)',
        'primary-dark': 'hsl(25 95% 40% / 1)',
        'brand-blue': '#2563a8',
        'brand-blue-dark': '#1e4d85',
        'brand-blue-light': '#3b9ed8',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
