import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@styles': resolve(__dirname, './src/components/shared/styles'),
			'@type': resolve(__dirname, './src/components/shared/types'),
			'@utils': resolve(__dirname, './src/components/shared/utils'),
			'@hooks': resolve(__dirname, './src/components/shared/hooks'),
			'@static': resolve(__dirname, './src/components/shared/static'),
			'@api': resolve(__dirname, './src/components/shared/api'),
			'@atoms': resolve(__dirname, './src/components/atoms'),
			'@molecules': resolve(__dirname, './src/components/molecules'),
			'@organisms': resolve(__dirname, './src/components/organisms'),
			'@templates': resolve(__dirname, './src/components/templates'),
			'@pages': resolve(__dirname, './src/components/pages'),
			'@public': resolve(__dirname, './public'),
		},
	},
});
