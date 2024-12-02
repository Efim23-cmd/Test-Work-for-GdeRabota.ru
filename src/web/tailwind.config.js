import {
	fontFamily as _fontFamily,
	screens as _screens,
} from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,ts,jsx,tsx,mdx}'];
export const theme = {
	extend: {
		colors: {
			primary: {
				DEFAULT: '#304ac1',
				dark: '#1A2C88',
			},
			info: {
				DEFAULT: '#20a1ff',
			},
			success: {
				DEFAULT: '#65d83c',
			},
			error: {
				DEFAULT: '#ef4f39',
			},
			grey: {
				8: '#eceff0',
				20: '#d2d5d6',
				36: '#aeb0b5',
				52: '#898e94',
				68: '#666c77',
				84: '#404a53',
				100: '#eef1f3',
				200: '#d9dee2',
				300: '#bfc6cc',
				400: '#a9b2b9',
				500: '#919ba3',
				600: '#7b858f',
				700: '#5e6a74',
				800: '#434d56',
				900: '#232c34',
				1000: '#1a2128',
			},
		},
		fontSize: {
			title: [
				'28px',
				{
					fontFamily: 'Inter',
					fontWeight: 400,
					lineHeight: 1.3,
				},
			],
			'body-0': ['20px'],
			'body-1': ['18px'],
			'body-2': ['16px'],
			'body-3': ['14px'],
			button: [
				'14px',
				{
					fontFamily: 'Inter',
					fontWeight: 400,
					height: 0.09,
					lineHeight: '18px',
				},
			],
		},
		fontFamily: {
			sans: ['Inter', ..._fontFamily.sans],
		},
		borderRadius: {
			none: '0',
			xs: '4px',
			sm: '6px',
			md: '8px',
			lg: '12px',
			xl: '16px',
			full: '50%',
		},
		boxShadow: {
			'dark-md': '0 25px 40px -10px #1C273114',
		},
	},
	screens: {
		..._screens,
		sm: '450px',
		md: '640px',
		lg: '1024px',
		xl: '1280px',
	},
};
