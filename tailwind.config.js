/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: '#054f49',
                    secondary: '#054f49',
                    page: '#fcfbfd',
                    content: '#fffcfc',
                    card: '#ffffff',
                    muted: '#4b5563',
                    text: '#000000',
                }
            }
        },
    },
    plugins: [],
}
