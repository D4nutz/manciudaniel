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
      'gray': '#808080',
      'inactive': '#e5e7eb',
      'hovernav': '#38bdf8',
      'navbarbg': '#89b1ca',
      'navbardarkbg': '#075985',
      'holo': '#00FCFC',
    },
    boxShadow: {
      'themetoggleshadow': '-2px 3px 6px rgba(0, 0, 0, 0.5), 2px 0px 20px rgba(70, 70, 70, 0.12),inset 14px 18px 19px rgba(70, 70, 70, 0.12)',
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
        },
        float: {
          '0%': { transform: 'translateY(0px)'},
          '100%': { transform: 'translateY(-30px)'},
        }, 
        holographiclight: {
          '0%': { boxShadow: '0 -100px 5px rgba(255, 255, 255, .15), 0 -10px 2px rgba(255, 255, 255, .5), 0 -70px 5px rgba(255, 255, 255, .15), 0 -10px 3px rgba(255, 255, 255, .5), 0 -3px 4px rgba(255, 255, 255, .5), 0 -4px 6px rgba(255, 255, 255, .5), 0 -5px 10px rgba(255, 255, 255, .75), 0 -7px 20px rgba(255, 255, 255, .75), 0 -10px 30px rgba(255, 255, 255, .75), 0 -15px 40px rgba(255, 255, 255, .75), 0 -25px 50px rgba(255, 255, 255, .75), 0 -35px 60px rgba(255, 255, 255, .85), 0 -45px 70px rgba(255, 255, 255, .95), 0 -65px 80px rgba(255, 255, 255, 1), 0 -75px 90px rgba(255, 255, 255, 1)'},
          '100%': { boxShadow: '0 -0px 5px rgba(255, 255, 255, .15), 0 -1px 2px rgba(255, 255, 255, .5), 0 -1px 5px rgba(255, 255, 255, .15), 0 -2px 3px rgba(255, 255, 255, .5), 0 -3px 4px rgba(255, 255, 255, .5), 0 -4px 6px rgba(255, 255, 255, .5), 0 -5px 7px rgba(255, 255, 255, .75), 0 -7px 10px rgba(255, 255, 255, .75), 0 -10px 15px rgba(255, 255, 255, .75), 0 -15px 20px rgba(255, 255, 255, .75), 0 -25px 25px rgba(255, 255, 255, .75), 0 -35px 30px rgba(255, 255, 255, .85), 0 -45px 35px rgba(255, 255, 255, .95), 0 -65px 40px rgba(255, 255, 255, 1), 0 -75px 50px rgba(255, 255, 255, 1)'},
        },
        holographicdark: {
          '0%': { boxShadow: '0 -100px 5px rgba(0, 0, 0, .15), 0 -10px 2px rgba(0, 0, 0, .5), 0 -70px 5px rgba(0, 0, 0, .15), 0 -10px 3px rgba(0, 0, 0, .5), 0 -3px 4px rgba(0, 0, 0, .5), 0 -4px 6px rgba(0, 0, 0, .5), 0 -5px 10px rgba(0, 0, 0, .75), 0 -7px 20px rgba(0, 0, 0, .75), 0 -10px 30px rgba(0, 0, 0, .75), 0 -15px 40px rgba(0, 0, 0, .75), 0 -25px 50px rgba(0, 0, 0, .75), 0 -35px 60px rgba(0, 0, 0, .85), 0 -45px 70px rgba(0, 0, 0, .95), 0 -65px 80px rgba(0, 0, 0, 1), 0 -75px 90px rgba(0, 0, 0, 1)'},
          '100%': { boxShadow: '0 -0px 5px rgba(0, 0, 0, .15), 0 -1px 2px rgba(0, 0, 0, .5), 0 -1px 5px rgba(0, 0, 0, .15), 0 -2px 3px rgba(0, 0, 0, .5), 0 -3px 4px rgba(0, 0, 0, .5), 0 -4px 6px rgba(0, 0, 0, .5), 0 -5px 7px rgba(0, 0, 0, .75), 0 -7px 10px rgba(0, 0, 0, .75), 0 -10px 15px rgba(0, 0, 0, .75), 0 -15px 20px rgba(0, 0, 0, .75), 0 -25px 25px rgba(0, 0, 0, .75), 0 -35px 30px rgba(0, 0, 0, .85), 0 -45px 35px rgba(0, 0, 0, .95), 0 -65px 40px rgba(0, 0, 0, 1), 0 -75px 50px rgba(0, 0, 0, 1)'},
        }
      },
      animation: {
        h0to100: 'h0to100 .5s ease-in-out',
        reverseh0to100: 'reverseh0to100 .5s ease-in-out',
        float: 'float  1s infinite alternate',
        holographiclight: 'holographiclight 1.5s infinite alternate',
        holographicdark: 'holographicdark 1.5s infinite alternate',
      },
    },
  },
  plugins: [],
}
