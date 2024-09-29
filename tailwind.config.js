/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('')",
        'herotoo': "url('https://wallpaper.forfun.com/fetch/9c/9c6b7b76450142ef91554f58690971d4.jpeg?h=900&r=0.5')",
        
      },
    },
  },
  plugins: [],
}
