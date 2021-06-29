module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Roboto Mono', 'monospace'],
      body: ['Lato', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '960px',
        xl: '960px',
        '2xl': '960px',
      },
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: '#023047',
          '50': '#09A8F8',
          '100': '#069BE6',
          '200': '#0580BE',
          '300': '#046696',
          '400': '#034B6F',
          '500': '#023047',
          '600': '#022638',
          '700': '#011C29',
          '800': '#01121A',
          '900': '#00080B',
        },
        secondary: {
          DEFAULT: '#219EBC',
          '50': '#B9E7F3',
          '100': '#A5E1EF',
          '200': '#7ED4E8',
          '300': '#57C7E2',
          '400': '#30BADB',
          '500': '#219EBC',
          '600': '#1B8199',
          '700': '#156477',
          '800': '#0F4654',
          '900': '#092931',
        },
        tertiary: {
          DEFAULT: '#FB8500',
          '50': '#FFD19D',
          '100': '#FFC88B',
          '200': '#FFB867',
          '300': '#FFA743',
          '400': '#FF9620',
          '500': '#FB8500',
          '600': '#D26F00',
          '700': '#A95A00',
          '800': '#814400',
          '900': '#582F00',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
};
