export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary color: Deep, sophisticated teal/emerald
        'primary': '#004D40', 
        'primary-light': '#4DB6AC',
        // Secondary/Accent color: Warm gold/amber
        'accent': '#FFB300', 
        'accent-dark': '#FF8F00',
        // Neutral palette
        'background-light': '#FAFAFA',
        'background-dark': '#121212',
        'text-dark': '#212121',
        'text-light': '#E0E0E0',
      },
      fontFamily: {
        // Using a modern, clean sans-serif font stack
        sans: ['Inter', 'Arial', 'sans-serif'],
        // Optional: A serif font for headings or specific sections
        serif: ['Merriweather', 'serif'],
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}