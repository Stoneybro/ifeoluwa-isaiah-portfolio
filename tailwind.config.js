/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize:{
        xlClamp:"clamp(2rem,10vw,4rem)",
        lgClamp:"clamp(1.5rem,10vw,3.5rem)",
        mdClamp:"clamp(1rem, 10vw, 3rem)"
        
      },
      fontFamily:{
        sans:['var(--DMSerifDisplay)'],
        serif:['var(--HKGrotesk)']
      },
     screens:{
      md2:'870px',
      sm2:'480px'
     }
    },
  },
  plugins: [],
  darkMode:'class'

}
