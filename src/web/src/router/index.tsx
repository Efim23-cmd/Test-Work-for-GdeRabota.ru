import { Routes, Route } from 'react-router';

import Error from '@pages/Error';
import HomePage from '@pages/Home';
import PayCheckPage from '@pages/PayCheck';

export const Router = () => (
	<Routes>
		<Route path="/" element={<HomePage />} />
		<Route path="/pay/check" element={<PayCheckPage />} />
		<Route path="*" element={<Error statusCode={404} />} />
	</Routes>
);
