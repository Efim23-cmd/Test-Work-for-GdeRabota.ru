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
				DEFAULT: '#89FFF1',
			},
			white: {
				DEFAULT: '#ffffff',
				8: 'rgba(255, 255, 255, 0.08)',
				20: 'rgba(255, 255, 255, 0.20)',
				36: 'rgba(255, 255, 255, 0.36)',
				52: 'rgba(255, 255, 255, 0.52)',
				68: 'rgba(255, 255, 255, 0.68)',
				84: 'rgba(255, 255, 255, 0.84)',
			},
			grey: {
				8: 'rgba(23, 23, 24, 0.08)',
				20: 'rgba(23, 23, 24, 0.20)',
				36: 'rgba(23, 23, 24, 0.36)',
				52: 'rgba(23, 23, 24, 0.52)',
				68: 'rgba(23, 23, 24, 0.68)',
				84: 'rgba(23, 23, 24, 0.84)',
				100: '#C1C1C2',
				200: '#9FA0A5',
				300: '#7E7F85',
				400: '#6D6E73',
				500: '#55565B',
				600: '#48494E',
				700: '#2F3033',
				800: '#222325',
				900: '#171718',
				1000: '#151515',
			},
		},
		fontFamily: {
			sans: ['Inter', ..._fontFamily.sans],
		},
		fontSize: {
			'h1-desktop': ['34px', { fontWeight: 600 }],
			'h1-mobile': ['26px', { fontWeight: 600 }],
			'h2-desktop': ['26px', { fontWeight: 600 }],
			'h2-mobile': ['24px', { fontWeight: 600 }],
			'h3-desktop': ['24px', { fontWeight: 600 }],
			'h3-mobile': ['20px', { fontWeight: 600 }],
			'h4-desktop': ['20px', { fontWeight: 600 }],
			'h4-mobile': ['18px', { fontWeight: 600 }],
			'h5-desktop': ['18px', { fontWeight: 600 }],
			'h5-mobile': ['16px', { fontWeight: 600 }],
			'h6-desktop': ['16px', { fontWeight: 600 }],
			'h6-mobile': ['16px', { fontWeight: 600 }],
			'body-0': ['20px'],
			'body-1': ['18px'],
			'body-2': ['16px'],
			'body-3': ['14px'],
			'caption-1': ['12px'],
			'caption-2': [
				'12px',
				{
					fontWeight: 600,
				},
			],
			'subtitle-0': [
				'18px',
				{
					fontWeight: 600,
				},
			],
			'subtitle-1': [
				'16px',
				{
					fontWeight: 600,
				},
			],
			'subtitle-2': [
				'14px',
				{
					fontWeight: 600,
				},
			],
			'button-sm': ['14px'],
			'button-md': ['16px'],
			'button-lg': ['18px'],
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
		backgroundImage: {
			body: 'linear-gradient(180deg, #2F3033 0px, #151515 151px)',
			'gradient-primary': 'linear-gradient(90deg, #A8FFDC, #89FFF1)',
		},
		boxShadow: {
			'dark-md': '0 4px 4px rgb(0 0 0 / 25%)',
			footer: '0 0px 70px 0px #081D79',
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