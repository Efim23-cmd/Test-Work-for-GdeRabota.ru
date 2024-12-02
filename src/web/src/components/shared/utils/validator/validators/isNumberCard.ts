import { GetValidator } from '../type';

export const isNumberCard: GetValidator<never, string> =
	() => async (value) => {
		const number = Number(value.replace(/\D+/g, ''));

		if (!Number.isNaN(number)) {
			const numberString = number.toString();

			if (numberString.length >= 13 && numberString.length <= 19) {
				return null;
			}
		}

		return 'Поле от 13 до 19 числовых символов';
	};
