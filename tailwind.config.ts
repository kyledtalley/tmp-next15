const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        destructive: "rgb(var(--destructive) / <alpha-value>)",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      addBase({
        ":root": {
          "--background": "255 255 255",
          "--foreground": "51 51 51",
          "--primary": "255 255 255",
          "--secondary": "255 77 79",
          "--border": "229 231 235",
          "--muted": "243 244 246",
          "--destructive": "185 28 28",
        },
        ".dark": {
          "--background": "24 24 24",
          "--foreground": "229 231 235",
          "--primary": "24 24 24",
          "--secondary": "255 77 79",
        },
      });
    }),
  ],
};
