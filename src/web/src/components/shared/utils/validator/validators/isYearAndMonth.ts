import { GetValidator } from '../type';

export const isYearAndMonth: GetValidator<never, string> =
	() => async (value) => {
		const array = value.split('/');

		if (array.length === 2) {
			const month = Number(array[0]);
			const year = Number(array[1]);

			if (month >= 1 && month <= 12 && year >= 2021 && year <= 2026) {
				return null;
			}
		}

		return 'Поле от 1 до 12, второе от 21 до 26';
	};
