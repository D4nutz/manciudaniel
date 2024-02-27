/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
   ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'source-code': ['"Source Code Pro"', 'cursive'],
    },
    extend: {
      keyframes: {
        h0to100: {
          '0%': { transform: 'translateY(-100px); opacity: 0' },
          '100%': { transform: 'translateY(0px); opacity: 1' },
        }
      },
      animation: {
        h0to100: 'h0to100 .5s ease-in-out',
      },
    },
  },
  plugins: [],
}
