import { MouseEvent, InputHTMLAttributes } from 'react';

import { FieldProps } from '@atoms/Field/types';
import { IconProps } from '@atoms/Icon/types';

type ElementProps = IconProps & {
	onClick?: (e: MouseEvent<HTMLLabelElement>) => void;
};

export type InputProps = Omit<FieldProps, 'id' | 'children'> &
	InputHTMLAttributes<HTMLInputElement> & {
		iconStartProps?: ElementProps;
		iconEndProps?: ElementProps;
		textStart?: string;
		textEnd?: string;
		helperText?: string;
		inputClassName?: string;
		fullWidth?: boolean;
	};
