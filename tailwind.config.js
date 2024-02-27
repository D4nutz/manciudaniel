/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
   ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'source-code': ['"Source Code Pro"', 'cursive'],
    },
    colors: {
      'transparent': 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'inactive': '#e5e7eb',
      'hovernav': '#38bdf8',
      'navbarbg': '#bfdbfe',
      'navbardarkbg': '#075985',
    },
    boxShadow: {
      'themetoggleshadow': '0px 0px 10px rgba(255, 255, 255, 0.5), 2px 1px 20px rgba(70, 70, 70, 0.12),inset 14px 18px 19px rgba(70, 70, 70, 0.12)',
    },
    extend: {
      keyframes: {
        h0to100: {
          '0%': { height: '0%', padding: '0'},
          '100%': { height: '180px', padding: '1rem'},
        },
        reverseh0to100: {
          '0%': { height: '180px', padding: '1rem'},
          '100%': { height: '0%', padding: '0'},
        }
      },
      animation: {
        h0to100: 'h0to100 .5s ease-in-out',
        reverseh0to100: 'reverseh0to100 .5s ease-in-out',
      },
    },
  },
  plugins: [],
}
