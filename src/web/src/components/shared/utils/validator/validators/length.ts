import { GetValidator } from '../type';

export const length: GetValidator<number, string> = (count) => {
	if (count && count <= 0) {
		throw new Error(
			`Валидатор maxLength ожидает положительное ограничение длины строки, получил ${count}`,
		);
	}

	return async (value) =>
		value.length === count ? null : `Количество символов должно быть ${count}`;
};
