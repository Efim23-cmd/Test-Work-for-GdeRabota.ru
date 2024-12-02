type ValidationResult = string | null;
type Formatter = (params: string) => string | null;
type Validator<T> = (params: T) => Promise<ValidationResult>;
type GetValidator<Options, Params> = (options?: Options) => Validator<Params>;

type DefaultField = {
	value: string;
	error?: string;
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
