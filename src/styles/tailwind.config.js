const colors = require('tailwindcss/colors')

module.exports = {
    content: ['_site/**/*.html'],
    safelist: [],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
    theme: {
        extend: {
            colors: {
                gray: colors.slate,
                primary: "#0085FF",
                secondary: "#B440FC",
                accent: "#35e9ad",
                accentDark: "#15373E",
                caminoSky: "#B5E3FD",
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'infinite-scroll': 'infinite-scroll 60s linear infinite',
                'infinite-scroll-reverse': 'infinite-scroll-reverse 60s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                from: { transform: 'translateX(0)' },
                to: { transform: 'translateX(-100%)' },
                },
                'infinite-scroll-reverse': {
                from: { transform: 'translateX(-100%)' },
                to: { transform: 'translateX(0)' },
                }
            }                    
        },
        fontFamily: {
            'body': ['Inter, system-ui, sans-serif'],
            'headline': ['ClashDisplay-Variable, system-ui, sans-serif'],
            'mono': ['ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1.5rem',
                },
        }
    },
}