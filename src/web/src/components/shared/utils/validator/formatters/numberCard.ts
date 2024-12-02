import { Formatter } from '../type';

export const numberCard: Formatter = (value: string) => {
	const number = BigInt(value.replace(/\D+/g, ''));

	if (!Number.isNaN(number)) {
		const list: string[] = [];
		let numberString = number.toString();

		do {
			list.push(numberString.slice(0, 4));
			numberString = numberString.slice(4, numberString.length);
		} while (numberString.length / 4 >= 1);

		list.push(numberString);

		return list.join(' ').trim();
	}

	return value;
};
