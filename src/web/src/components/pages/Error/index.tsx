import { useEffect, useState } from 'react';

export type ErrorProps = {
	statusCode?: number;
};

export default function Error({ statusCode }: ErrorProps) {
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		setHydrated(true);
	}, []);

	if (!hydrated) {
		return null;
	}

	return <div>Error, status code: {statusCode}</div>;
}
