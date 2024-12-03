import { BaseLayout } from '@pages/BaseLayout';

import { useParams } from 'react-router';

export default function PayCheckPage() {
	const { id } = useParams();

	return <BaseLayout>pay check {id}</BaseLayout>;
}
