/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./*.html",],
  theme: {
    extend: {
      fontFamily: {
        'reemkufi': ['Reem Kufi Fun', 'Trebuchet MS'],
        'roboto': ['Roboto', 'Arial']
      },
      backgroundImage: {
        'hero-section': 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("../images/banner.jpg")'
      },
      height: {
        'hero': '65vh',
      },
      colors: {
        'softorange': '#e9c46a',
        'darkblue': '#2a9d8f',
        'darkred': '#e76f51',
        'darknavy': '#264653'
      },
      fontSize: {
        dynamicH: "clamp(64px, 10vw, 108px)",
        dynamicP: "clamp(20px, 3vw, 32px)",
        dynamicA: "clamp(18px, 2vw, 22px)",
        dynamicBase: "clamp(16px, 2vw, 18px)"
      },
      maxWidth: {
        '30': '30ch',
        '40': '40ch',
        '850': '850px'
      },
      boxShadow: {
        'button': '0px 0px 12px 3px #4FA39F',
      },
      screens: {
        '45em': '45em',
      }
    },
  },
  plugins: [],
}
