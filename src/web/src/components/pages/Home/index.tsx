import { BaseLayout } from '@pages/BaseLayout';
import { PaymentForm } from '@templates/PaymentForm';

export default function HomePage() {
	return (
		<BaseLayout>
			<PaymentForm />
		</BaseLayout>
	);
}
