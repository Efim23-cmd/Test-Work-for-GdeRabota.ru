import eslintJs from '@eslint/js';
import eslintAirbnbTypescript from 'eslint-config-airbnb-typescript';
import eslintImportPlugin from 'eslint-plugin-import';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintReact from 'eslint-plugin-react';
import globals from 'globals';
import eslintTypescript from 'typescript-eslint';

export default [
	eslintJs.configs.recommended,
	{
		files: ['*.{js,jsx,ts,tsx}'],
		...eslintTypescript.configs.eslintRecommended,
		...eslintPluginJsxA11y.flatConfigs.recommended,
		...eslintReact.configs.flat.recommended,
		languageOptions: {
			...eslintPluginJsxA11y.flatConfigs.recommended.languageOptions,
			globals: {
				...globals.browser,
				...globals.node,
			},
			parser: eslintTypescript.parser,
			parserOptions: {
				project: './tsconfig.json',
			},
		},
		plugins: {
			react: eslintReact,
			import: eslintImportPlugin,
			airbnb: eslintAirbnbTypescript,
			prettier: eslintPluginPrettier,
			'jsx-a11y': eslintPluginJsxA11y,
			'@typescript-eslint': eslintTypescript.plugin,
		},
		rules: {
			'no-unused-vars': 'warn',
			'arrow-body-style': ['error', 'as-needed'],
			'no-undef': 'warn',
			'no-redeclare': 'off',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unsafe-call': 'warn',
			'@typescript-eslint/no-unsafe-assignment': 'warn',
			'@typescript-eslint/no-unsafe-argument': 'warn',
			'@typescript-eslint/return-await': 'warn',
			'@typescript-eslint/no-misused-promises': 'warn',
			'@typescript-eslint/no-empty-interface': [
				'error',
				{
					allowSingleExtends: true,
				},
			],
			'@typescript-eslint/no-unsafe-member-access': 'warn',
			'@typescript-eslint/no-shadow': 'warn',
			'react/self-closing-comp': ['error', { component: true, html: true }],
		},
		ignores: ['node_modules', '.next'],
	},
];
