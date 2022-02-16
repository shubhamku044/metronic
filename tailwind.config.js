module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        darkBlue: '#15325C',
        darkBg: '#0A1931',
        white: '#ffffff',
        borderBlue: '#39A2DB',
        platfawmBlue: {
          1: '#39A2DB',
          primary: '#',
          secondary: '',
          teriary: '',
        },
        platfawmBlueLight: {
          1: '#39A2DB',
          primary: '#3EDBF0',
          secondary: '#39A2DB',
          teriary: '#041562',
        },
        platfawmBlueDark: {
          1: '#39A2DB',
          primary: '#2541B2',
          secondary: '#2940D3',
          teriary: '#0C4271',
        },
        platfawmTextDark: { 1: '#B5EAEA', 2: '#E8F6EF', 3: '#95D1CC' },
        platfawmTextLight: { teriary: '#95D1CC' },
        'darkBg-sec': '#1E3163',
        'darkBg-tert': '#2666CF',
      },
    },
  },
  plugins: [],
}
