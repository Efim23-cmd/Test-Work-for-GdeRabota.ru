type ValidationResult = string | null;
type Formatter<T> = (params: T) => string;
type Validator<T> = (params: T) => Promise<ValidationResult>;
type GetValidator<Options, Params> = (options?: Options) => Validator<Params>;

type DefaultField = {
	id: string;
	value: string;
	error: string | null;
	hasError: () => Promise<boolean>;
	reset?: () => void;
};

export type {
	ValidationResult,
	Formatter,
	Validator,
	GetValidator,
	DefaultField,
};
