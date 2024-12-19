module.exports = {
	content: [
	  "./app/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  background: "var(--background)",
		  foreground: "var(--foreground)",
		  primary: "var(--primary)",
		  "primary-foreground": "var(--primary-foreground)",
		  secondary: "var(--secondary)",
		  "secondary-foreground": "var(--secondary-foreground)",
		  border: "var(--border)",
		  muted: "var(--muted)",
		  "muted-foreground": "var(--muted-foreground)",
		  card: "var(--card)",
		  "card-foreground": "var(--card-foreground)",
		  accent: "var(--accent)",
		  "accent-foreground": "var(--accent-foreground)",
		  destructive: "var(--destructive)",
		  "destructive-foreground": "var(--destructive-foreground)",
		},
	  },
	},
	plugins: [],
  };
  