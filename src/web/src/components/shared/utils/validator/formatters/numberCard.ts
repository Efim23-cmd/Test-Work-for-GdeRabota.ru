import { Formatter } from '../type';

export const numberCard: Formatter = (inputString: string) => {
	const number = BigInt(inputString.replace(/\D+/g, ''));

	if (!Number.isNaN(number)) {
		return number
			.toString()
			.replace(/(d{4})(?=d)/g, '$1 ')
			.trim();
	}

	return null;
};
