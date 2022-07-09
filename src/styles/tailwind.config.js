const colors = require('tailwindcss/colors')

module.exports = {
    content: ['_site/**/*.html'],
    safelist: [],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms'),
    ],
    theme: {
        colors: {
            white: '#fff',
            gray: colors.slate,
            primary: '#4BA6EE',
            secondary: '#B440FC',
        },
        fontFamily: {
            'sans': ['Plus Jakarta Sans, system-ui, sans-serif'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '4rem',
                '2xl': '4rem',
                },
        }
      },
  }