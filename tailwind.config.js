/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
    content: ["./src/**/*.*"],
    theme: {
        extend: {},
        theme: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                black: {
                    900: colors.black,
                    800: "#121212",
                    
                },
                white: colors.white,
                gray: colors.slate,
                green: colors.emerald,
                purple: colors.violet,
                yellow: colors.amber,
                pink: colors.fuchsia,
            },
        },
        plugins: [],
    },
}
