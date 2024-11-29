import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ColorType } from '@type/color';
import { SizeType } from '@type/size';
import { ShapeType } from '@type/shape';
import { VariantType } from '@type/variant';
import { MutationComponent, ReactTag } from '@type/mutationComponent';

type Props = {
	size?: SizeType;
	children?: ReactNode;
	variant?: VariantType;
	shape?: ShapeType;
	fullWidth?: boolean;
	disabled?: boolean;
	color?: ColorType;
	textAlign?: 'left' | 'center' | 'right';
	loading?: boolean;
};

export type ButtonProps<TTag extends ReactTag = 'button'> = Omit<
	MutationComponent<TTag>,
	keyof Props
> &
	ButtonHTMLAttributes<HTMLButtonElement> &
	Props;
