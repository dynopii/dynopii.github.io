const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			darkBg: '#060606',
			grayBg: '#1c1d1f',
			primary: '#828fff',
			// white: '#F7F8F8',
			white: '#FFFFFF',
			lightGray: '#D0D6E0',
			darkGray: '#8A8F98',
			eaeaea: '#EAEAEA',
			'gray-111': '#111111',
			'gray-222': '#222222',
			'gray-333': '#333333',
			'gray-444': '#444444',
			'gray-555': '#555555',
			'gray-666': '#666666',
			'gray-777': '#777777',
			'gray-888': '#888888',
			'gray-999': '#999999',
			'gray-4f4': '#4F4F4F',
			'gray-828': '#828282',
			'gray-bdb': '#BDBDBD',
			'gray-e0e': '#E0E0E0',
			'gray-f2f': '#F2F2F2',
			brand: '#9943D2',
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
		extend: {
			margin: {
				10: '10px',
				15: '15px',
				20: '20px',
				25: '25px',
				30: '30px',
				35: '35px',
				40: '40px',
				45: '45px',
				50: '50px',
				60: '60px',
				70: '70px',
				80: '80px',
				90: '90px',
			},
			padding: {
				10: '10px',
				15: '15px',
				20: '20px',
				25: '25px',
				30: '30px',
				35: '35px',
				40: '40px',
				45: '45px',
				50: '50px',
				60: '60px',
				70: '70px',
				80: '80px',
				90: '90px',
			},
			fontSize: {
				// [font-size, line-height]
				subtitle: ['0.857rem', { letterSpacing: '0.1px' }], // 14px
				button: ['0.857rem', { letterSpacing: '0.75px' }], // 14px
				'body-sm': ['0.857rem', { letterSpacing: '0.3px' }], // 14px 20px
				'body-lg': ['1rem', { letterSpacing: '0.6px' }], // 16px 24px
				h6: ['1.25rem', { letterSpacing: '0.15px' }], // 20px 28px
				h5: ['1.5rem', ''], // 24px
				h4: ['2.125rem', { letterSpacing: '0.25px' }], // 34px
				h3: ['3rem', ''], // 48px
				h2: ['3.75rem', ''], // 60px
				h1: ['6rem', { letterSpacing: '-1.5px' }], // 96px
			},
		},
		letterSpacing: {
			tightest: '-.075em',
			tighter: '-.05em',
			tight: '-.025em',
			normal: '0',
			wide: '.025em',
			wider: '.05em',
			widest: '.1em',
			widest: '.25em',
		},
		borderRadius: {
			...defaultTheme.borderRadius,
			default: '6px',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
