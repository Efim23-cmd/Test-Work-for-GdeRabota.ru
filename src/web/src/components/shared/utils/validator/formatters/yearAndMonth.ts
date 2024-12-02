import { Formatter } from '../type';

export const yearAndMonth: Formatter = (value: string) => {
	const number = Number(value.replace(/\D+/g, ''));

	if (!Number.isNaN(number)) {
		const numberString = number.toString();

		if (numberString.length <= 6) {
			if (numberString.length > 2) {
				return numberString.slice(0, 2) + '/' + numberString.slice(2, 6);
			}

			return numberString;
		}
	}

	return null;
};
