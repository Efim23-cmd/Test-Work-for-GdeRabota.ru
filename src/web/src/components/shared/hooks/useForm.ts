import { useState } from 'react';
import type { FormEvent, FormEventHandler } from 'react';

import { DefaultField } from '@utils/validator';

function useForm<Field extends DefaultField, Response>(props: {
	fields: Field[];
	apiCall: () => Promise<Response>;
	onSuccess?: (response: Response) => void;
	onError?: (error: string) => void;
}): {
	isSending: boolean;
	sendingError: string;
	hasFieldErrors: boolean;
	handleFormSubmit: FormEventHandler<HTMLFormElement>;
} {
	const { fields, apiCall, onSuccess, onError } = props;

	const [isSending, setIsSending] = useState(false);
	const [sendingError, setSendingError] = useState('');

	const handleFormSubmit = async (event: FormEvent) => {
		event.preventDefault();

		const errors = await Promise.all(fields.map((field) => field.hasError()));
		const isFormValid = errors.every((error) => !error);

		if (isFormValid) {
			setIsSending(true);
			setSendingError('');

			try {
				const response = await apiCall();
				onSuccess?.(response);
			} catch (err) {
				const msg =
					err instanceof Error
						? err.message
						: 'Что-то пошло не так, попробуйте ещё раз';

				setSendingError(msg);
				onError?.(msg);
			} finally {
				setIsSending(false);
			}
		}
	};

	const hasFieldErrors = fields.some((field) => field.error);

	return {
		isSending,
		sendingError,
		hasFieldErrors,
		handleFormSubmit,
	};
}

export default useForm;
