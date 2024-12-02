import { ReactNode } from 'react';

export type FieldProps = {
	id: string;
	className?: string;
	error?: boolean;
	label?: string;
	helperText?: string;
	fullWidth?: boolean;
	required?: boolean;
	disabled?: boolean;
	children: ReactNode;
};
