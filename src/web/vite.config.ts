import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

import { resolve } from 'path';

export default defineConfig({
	plugins: [react(), svgr()],
	ssr: {
		noExternal: ['react-router-dom'],
	},
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
