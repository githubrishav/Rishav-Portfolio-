/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://images.unsplash.com/photo-1506968430777-bf7784a87f23?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",

        'herotoo': "url('https://wallpaper.forfun.com/fetch/9c/9c6b7b76450142ef91554f58690971d4.jpeg?h=900&r=0.5')",
        
      },
    },
  },
  plugins: [],
}
