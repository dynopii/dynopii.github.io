module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			darkBg: '#060606',
			grayBg: '#1c1d1f',
			primary: '#828fff',
			white: '#F7F8F8',
			lightGray: '#D0D6E0',
			darkGray: '#8A8F98',
		},
		screens: {
			xxl: { max: '1535px' },
			// => @media (max-width: 1535px) { ... }

			xl: { max: '1279px' },
			// => @media (max-width: 1279px) { ... }

			lg: { max: '1023px' },
			// => @media (max-width: 1023px) { ... }

			md: { max: '870px' },
			// => @media (max-width: 870px) { ... }

			sm: { max: '639px' },
			// => @media (max-width: 639px) { ... }
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
