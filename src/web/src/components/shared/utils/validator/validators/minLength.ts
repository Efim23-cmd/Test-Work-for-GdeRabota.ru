import { GetValidator } from '../type';

const DEFAULT_MIN_CHAR_COUNT = 1;

export const minLength: GetValidator<number, string> = (
	minCharCount = DEFAULT_MIN_CHAR_COUNT,
) => {
	if (minCharCount <= 0) {
		throw new Error(
			`Валидатор minLength ожидает положительное минимальное значение длины строки, получил ${minCharCount}`,
		);
	}

	return async (value) =>
		value.length >= minCharCount
			? null
			: `Количество символов не должно быть меньше ${minCharCount}`;
};