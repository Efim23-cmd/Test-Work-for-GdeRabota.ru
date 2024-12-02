import { GetValidator } from '../type';

export const isYearAndMonth: GetValidator<never, string> =
	() => async (value) => {
		const array = value.split('/');

		if (array.length === 2) {
			const month = Number(array[0]);

			if (month < 1 || month > 12) {
				return 'Некорректный месяц';
			}

			const year = Number(array[1]);

			if (year < 2021 || year > 2026) {
				return 'Некорректный год';
			}

			return null;
		}

		return 'Некорректный дата';
	};
