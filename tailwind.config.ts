const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				background: "#ffffff",
				foreground: "#333333",
				primary: "#4f46e5",
				primaryForeground: "#ffffff",
				secondary: "#ff4d4f",
				secondaryForeground: "#ffffff",
				mutedForeground: "#6b7280",
			},
		},
	},
	plugins: [],
};
