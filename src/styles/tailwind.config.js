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
        extend: {
            colors: {
                gray: colors.slate,
            },
        },
        fontFamily: {
            'sans': ['Inter, system-ui, sans-serif'],
            'headline': ['ClashDisplay-Variable, system-ui, sans-serif'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '2rem',
                sm: '4rem',
                lg: '4rem',
                xl: '4rem',
                '2xl': '4rem',
                },
        }
    },
}