/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {

    extend: {
      colors:{
        pcbg:"#1E5E7C",
        bghov:"#143D51",
        bg_barrier:"#313131"   
    },
      keyframes: {
        slide1: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-5px)' },
        },
        slide2: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' },
        },
        slide3: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-5px)' },
        },
      },
      animation: {
        slide1: 'slide1 1s infinite ease-in-out',
        slide2: 'slide2 1s infinite ease-in-out',
        slide3: 'slide3 1s infinite ease-in-out',
      },
      maxWidth: {
        'custom': '1660px',  // Добавляем кастомный размер
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover'], // Добавляем hover-анимацию
    },
  },
  plugins: [],
}

