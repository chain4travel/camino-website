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
                primary: "#0085FF",
                secondary: "#B440FC",
                accent: "#35E9AD",
                accentDark: "#15373E",
                caminoSky: "#B5E3FD",
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            }
        },
        fontFamily: {
            'body': ['Inter, system-ui, sans-serif'],
            'headline': ['ClashDisplay-Variable, system-ui, sans-serif'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1.5rem',
                },
        }
    },
}