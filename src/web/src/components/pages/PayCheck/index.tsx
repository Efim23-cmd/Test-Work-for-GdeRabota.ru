import { BaseLayout } from '@pages/BaseLayout';
import ErrorPage from '@pages/Error';
import { PayCheckForm } from '@templates/PayCheckForm';

import { useParams } from 'react-router';

export default function PayCheckPage() {
	const { pid } = useParams();

	if (pid) {
		return (
			<BaseLayout>
				<PayCheckForm pid={pid} />
			</BaseLayout>
		);
	}

	return <ErrorPage statusCode={500} />;
}
