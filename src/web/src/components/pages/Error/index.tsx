import { useEffect, useState } from 'react';

import { BaseLayout } from '@pages/BaseLayout';

export type ErrorProps = {
	statusCode?: number;
};

export default function ErrorPage({ statusCode }: ErrorProps) {
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		setHydrated(true);
	}, []);

	if (!hydrated) {
		return null;
	}

	return <BaseLayout>Error, status code: {statusCode}</BaseLayout>;
}
