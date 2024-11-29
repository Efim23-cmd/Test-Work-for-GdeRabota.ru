import { ValidationResult, Validator } from './type';

const validateValue = async <T>(
	value: T,
	validators: Validator<T>[],
): Promise<ValidationResult> => {
	let validationResult: ValidationResult = null;

	for (let index = 0; index < validators.length; index++) {
		const res = await validators[index](value);

		if (res) {
			validationResult = res;
			break;
		}
	}

	return validationResult;
};
export default validateValue;
