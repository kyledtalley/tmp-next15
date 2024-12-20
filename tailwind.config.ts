module.exports = {
    darkMode: ["class"],
    content: [
	  "./app/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
    	extend: {
    		colors: {
    			background: 'var(--background)',
    			foreground: 'var(--foreground)',
    			primary: 'var(--primary)',
    			'primary-foreground': 'var(--primary-foreground)',
    			secondary: 'var(--secondary)',
    			'secondary-foreground': 'var(--secondary-foreground)',
    			border: 'var(--border)',
    			muted: 'var(--muted)',
    			'muted-foreground': 'var(--muted-foreground)',
    			card: 'var(--card)',
    			'card-foreground': 'var(--card-foreground)',
    			accent: 'var(--accent)',
    			'accent-foreground': 'var(--accent-foreground)',
    			destructive: 'var(--destructive)',
    			'destructive-foreground': 'var(--destructive-foreground)',
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [],
  };
  