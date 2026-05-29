/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        novara: {
          primary: '#1E3A5F',     
          accent: '#0E8A7D',     
          bg: '#F4F6F8',           
          surface: '#FFFFFF',      
          text: '#1C1C2E',         
          muted: '#5A6478',        
          border: '#E2E6ED',       
        }
      },
      fontFamily: {
        'DM_Serif_Display': ['DM Serif Display', 'serif'],
        'DM_Sans': ['DM Sans', 'sans-serif'],
        'Syne': ['Syne', 'sans-serif'],
        'Space_Grotesk': ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

