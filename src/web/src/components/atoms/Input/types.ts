import type {
	HTMLAttributes,
	InputHTMLAttributes,
	MutableRefObject,
} from 'react';

type IconProps = {
	icon: React.ReactNode;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string;
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	iconStartProps?: IconProps;
	iconEndProps?: IconProps;
	label?: string;
	helperText?: string | null;
	required?: boolean;
	state?: boolean;
	inputClassName?: string;
	error?: boolean;
	fullWidth?: boolean;
}
