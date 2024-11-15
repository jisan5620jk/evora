/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        PrimaryColor: ['#f6cbb7'],
        PrimaryColor2: ['#f1f5ff'],
        BodyBg: ['#fdf7f5'],
        BodyBgDark: ['#121212'],
        HeadingColor: ['#555555'],
        TextColor: ['#121212e6'],
        TextColor2: ['#5f6368'],
        TextDark: ['#222222'],
        TextWarning: ['#875522'],
        TextWarning2: ['#5d3205'],
        TextGrey: ['#657290'],
        TextGrey2: ['#79839b'],
        TextGrey3: ['#354058'],
        BorderColor: ['#d5d5d5'],
        BorderColor2: ['#e2e2e2'],
      },
      boxShadow: {
        custom: '0px 10px 7.5px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
};
