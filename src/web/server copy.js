import express from 'express';
import { createServer } from 'vite';
import { render } from './src/entry-server';

const port = process.env.CLIENT_PORT || 3333;

const app = express();

async function startServer() {
	const vite = await createServer({
		server: { middlewareMode: 'ssr' },
	});

	app.use(vite.middlewares);

	app.get('*', async (req, res) => {
		const url = req.originalUrl;

		try {
			const appHtml = render(url);
			const template = await vite.transformIndexHtml(
				url,
				'<!DOCTYPE html><html><head><title>Vite SSR</title></head><body><div id="app">' +
					appHtml +
					'</div><script type="module" src="/src/entry-client.jsx"></script></body></html>',
			);

			res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
		} catch (error) {
			vite.ssrFixStacktrace(error);
			console.error(error);
			res.status(500).end('Internal Server Error');
		}
	});

	app.listen(port, () => {
		console.log(`Server is running at http://localhost:${port}`);
	});
}

startServer();
