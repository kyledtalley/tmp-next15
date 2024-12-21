module.exports = {
	darkMode: ["class"],
	content: [
	  "./app/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  primary: 'hsl(var(--primary))',
		  'primary-foreground': 'hsl(var(--primary-foreground))',
		  secondary: 'hsl(var(--secondary))',
		  'secondary-foreground': 'hsl(var(--secondary-foreground))',
		  accent: 'hsl(var(--accent))',
		  'accent-foreground': 'hsl(var(--accent-foreground))',
		  border: 'hsl(var(--border))',
		  muted: 'hsl(var(--muted))',
		  'muted-foreground': 'hsl(var(--muted-foreground))',
		  card: 'hsl(var(--card))',
		  'card-foreground': 'hsl(var(--card-foreground))',
		  destructive: 'hsl(var(--destructive))',
		  'destructive-foreground': 'hsl(var(--destructive-foreground))',
		},
		fontFamily: {
		  sans: ['"Open Sans"', 'sans-serif'],
		  serif: ['"Merriweather"', 'serif'],
		},
		keyframes: {
		  'fade-in': {
			'0%': { opacity: '0' },
			'100%': { opacity: '1' },
		  },
		  'slide-up': {
			'0%': { transform: 'translateY(20px)', opacity: '0' },
			'100%': { transform: 'translateY(0)', opacity: '1' },
		  },
		},
		animation: {
		  'fade-in': 'fade-in 0.5s ease-out',
		  'slide-up': 'slide-up 0.5s ease-out',
		},
	  },
	},
	plugins: [],
  }
  