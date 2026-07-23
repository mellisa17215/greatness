/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'greatness-gold': '#FFD166',
        'greatness-teal': '#118AB2',
        'greatness-sand': '#F8EDE3',
        'greatness-charcoal': '#213547'
      }
    }
  },
  plugins: []
}
