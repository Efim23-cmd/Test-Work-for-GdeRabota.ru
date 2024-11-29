import { GetValidator } from '../type';

const contain: GetValidator<string, string> = (regex = '') => {
	return async (value) =>
		value.indexOf(regex) >= 0
			? null
			: `Введенное вами значение не содержит ${regex}`;
};

export default contain;
