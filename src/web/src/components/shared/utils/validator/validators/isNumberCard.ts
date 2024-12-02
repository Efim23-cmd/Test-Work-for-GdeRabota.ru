import { GetValidator } from '../type';

export const isNumberCard: GetValidator<never, string> =
	() => async (value) => {
		const number = BigInt(value.replace(/\D+/g, ''));

		if (!Number.isNaN(number) && number >= 13 && number <= 13) {
			return null;
		}

		return 'Поле от 13 до 19 числовых символов';
	};
