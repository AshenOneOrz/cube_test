/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            keyframes: {
                'translate': {
                    '0%, 100%': {
                        'transform': 'translateX(0)',
                    },
                    '50%': {
                        'transform': 'translateX(5px)',
                    },
                },
            },
            animation: {
                'translate': 'translate 1.5s ease-out infinite',
            },
        },
    },
    plugins: [],
}
 