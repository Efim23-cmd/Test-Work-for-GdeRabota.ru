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
	formatter?: Formatter<string>;
	init?: string;
	validators: Validator<string>[];
};

function useTextFormField(
	id: string,
	{ init = '', formatter, validators }: Parameters,
): TextField {
	const [value, setValue] = useState(init);
	const [error, setError] = useState<ValidationResult | null>(null);

	const handleChange = useCallback(
		async (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
			const val = event.target.value;

			if (formatter) {
				setValue(formatter(val));
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
		id,
		value,
		error,
		hasError,
		handleChange,
		handleBlur,
	};
}

export type { TextField };
export default useTextFormField;
