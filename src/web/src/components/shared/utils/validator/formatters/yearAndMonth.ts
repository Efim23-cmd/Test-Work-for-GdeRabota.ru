import dayjs from 'dayjs';

import { Formatter } from '../type';

export const yearAndMonth: Formatter = (inputString: string) => {
	const number = Number(inputString.replace(/\D+/g, ''));

	if (!Number.isNaN(number)) {
		const numberString = number.toString();

		if (numberString.length <= 4)
			return `${numberString[0]}${numberString[1] ?? ''}${numberString[2] ? `/${numberString[2]}${numberString[3] ?? ''}` : ''}`;
	}

	return null;
};
