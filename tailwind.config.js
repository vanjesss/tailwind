/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#BFDBFE',
        secondary: '#F3E8FF',
        accent: '#FCE7F3',
        borderGray: '#E5E7EB'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #BFDBFE 0%, #F3E8FF 50%, #FCE7F3 100%)'
      },
      boxShadow: {
        'soft-lg': '0 12px 30px rgba(16,24,40,0.08)'
      }
    }
  },
  plugins: [],
}
