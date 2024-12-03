import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

import { Router } from './router';
import Error, { ErrorProps } from '@pages/Error';

interface IRenderProps extends ErrorProps {
	path: string;
	statusCode?: number;
}

export function render({ path, statusCode }: IRenderProps) {
	if (statusCode) {
		return ReactDOMServer.renderToString(<Error statusCode={statusCode} />);
	}

	const html = ReactDOMServer.renderToString(
		<React.StrictMode>
			<StaticRouter location={path}>
				<Router />
			</StaticRouter>
		</React.StrictMode>,
	);

	return { html };
}
