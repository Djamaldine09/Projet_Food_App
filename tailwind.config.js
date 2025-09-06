/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // customizations go here
      colors: {
        red: { 
          100: '#d33b0d'
        },
        green:{ 
          100: '#084137'
        },
        primary: '#fe8c00',
        white: { 
          DEFAULT:'#FFFFFF',
          100: '#FAFAFA',
          200: '#fe8c00',
        },
        gray: {
          100: '#878787',
          200: '#878787',
        },
        error: '#f14141',
        succes: '#2f9b65',
        fontFamily: {
         quicksand: ["Quicksand-Regular" ,  "sans-serif"],
          "quicksand-bold": ["Quicksand-Bold", "sans-serif"],
          "quicksand-medium": ["Quicksand-Medium", "sans-serif"],
          "quicksand-semiBold": ["Quicksand-SemiBold", "sans-serif"],
          "quicksand-light": ["Quicksand-Light", "sans-serif"],
        },
        },
    },
  },
  plugins: [],
}