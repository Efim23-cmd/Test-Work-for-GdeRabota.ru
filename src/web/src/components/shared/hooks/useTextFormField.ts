import { useCallback, useState } from 'react';
import type { ChangeEvent } from 'react';

import {
	DefaultField,
	ValidationResult,
	Formatter,
	Validator,
	validateValue,
} from '@utils/validator';

type TextField = DefaultField & {
	handleChange: (
		event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => void;
	handleBlur: () => void;
};

type Parameters = {
	formatter?: Formatter;
	init?: string;
	validators: Validator<string>[];
};

function useTextFormField({
	init = '',
	formatter,
	validators,
}: Parameters): TextField {
	const [value, setValue] = useState(init);
	const [error, setError] = useState<ValidationResult>(null);

	const handleChange = useCallback(
		async (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
			const val = event.target.value;

			if (!val) {
				setValue('');
				return;
			}

			if (formatter) {
				const result = formatter(val);
				if (result) {
					setValue(result);
				}
			} else {
				setValue(val);
			}
			setError(await validateValue(val, validators));
		},
		[validators],
	);

	const handleBlur = useCallback(async () => {
		setError(await validateValue(value, validators));
	}, [value, validators]);

	const hasError = useCallback(async () => {
		const err = await validateValue(value, validators);
		setError(err);

		return !!err;
	}, [value, validators]);

	return {
		value,
		error: error ?? '',
		hasError,
		handleChange,
		handleBlur,
	};
}

export type { TextField };
export default useTextFormField;
