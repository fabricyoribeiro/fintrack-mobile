/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        light:'Nunito_300Light',
        regular:'Nunito_400Regular',
        medium:'Nunito_500Medium',
        semibold:'Nunito_600SemiBold',
        bold:'Nunito_700Bold',
        extrabold:'Nunito_800ExtraBold'
      }
    },
  },
  plugins: [],
}

