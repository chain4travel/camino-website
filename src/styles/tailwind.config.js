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
                'gradient-xy':'gradient-xy 3s ease infinite',
            },
            keyframes: {
                'gradient-xy': {
                    '0%, 100%': {
                        'background-size':'400% 400%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size':'200% 200%',
                        'background-position': 'right center'
                    }
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