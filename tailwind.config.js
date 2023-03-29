/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  themes: [
     {
        mytheme: {
        
"primary": "#e02fb0",
        
"secondary": "#ff5675",
        
"accent": "#e07000",
        
"neutral": "#221E29",
        
"base-100": "#383753",
        
"info": "#80D7F4",
        
"success": "#28C868",
        
"warning": "#FCB35A",
        
"error": "#FB2D3E",
      },
    },
  ],
  plugins: [require("daisyui")],
}

