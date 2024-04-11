/** @type {import('tailwindcss').Config} */
module.exports = {

  themes: [
    {
      extend: {
        backgroundImage: {
          'hero-pattern': "url('/componentes/fundo.png')",
          'footer-texture': "url('/componentes/fundo.png')",
        }
      },



      mytheme: {
      
"primary": "#6d28d9",
      
"secondary": "#ff00ff",
      
"accent": "#0000ff",
      
"neutral": "#ff00ff",
      
"base-100": "#292524",
      
"info": "#ff00ff",
      
"success": "#00ff00",
      
"warning": "#00ff00",
      
"error": "#ff0000",
      },
    },

    

  ],

  
    


  content: [
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],



  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [require('daisyui')],


}
 


