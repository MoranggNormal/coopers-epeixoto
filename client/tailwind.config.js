const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      rotate: {
        4: "4deg",
      },
      screens: {
        "3xl": "2560px",
      },
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) =>
      addComponents({
        ".hover-up": {
          "&:hover": {
            transform: "translateY(-8px)",
            opacity: "0.90",
          },
        },
      })
    ),

    plugin(({ addComponents, theme }) =>
      addComponents({
        ".hover-down": {
          "&:hover": {
            transform: "translateY(8px)",
            opacity: "0.90",
          },
        },
      })
    ),
  ],
};
