import { GetValidator } from '../type';

export const required: GetValidator<string, string> =
	(message = 'Обязательное поле') =>
	async (value) =>
		value ? null : message;
