/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          'primary-background':'#F7FAFD',
          'secondary-background':'#E5EDF5',
          'primary-letter-color':'#333333',
          'secondary-letter-color':'#6C6C6C',
          'tertiary-letter-color':'#FF556E',
          'quartery-letter-color':'#8E8E8E',
          'line-color':'#C1CED0',
          'users-icon':'#A073E9',
          'users-icon-background':'#E8E3F9',
          'code-icon':'#19CA94',
         ' code-icon-background':'#D5F2ED',
          'cog-icon':'#FD6277',
          'cog-icon-background':'#F7E1E7',
          'comments-icon':'#FFAA11',
          'comments-icon-background':'#F7EFD9',
          'rocket-icon':'#46B0E5',
          'rocket-icon-background':'#DDF0F9',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

