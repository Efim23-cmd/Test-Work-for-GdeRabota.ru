import clsx from 'clsx';

import React from 'react';

import { ReactTag } from '@type/mutationComponent';

import styles from './styles.module.css';
import type { ButtonProps } from './types';

function ButtonInner<TTag extends ReactTag>(
	{
		as,
		children,
		color = 'primary',
		variant = 'solid',
		size = 'md',
		shape = 'rounded',
		textAlign = 'center',
		fullWidth = false,
		disabled,
		className,
		...props
	}: ButtonProps<TTag>,
	ref: React.ForwardedRef<TTag>,
) {
	return React.createElement(
		as ?? 'button',
		{
			ref,
			disabled,
			role: 'button',
			className: clsx(
				className,
				styles.button,
				styles[size],
				styles[variant],
				styles[shape],
				styles[color],
				styles[textAlign],
				{
					[styles.fullWidth]: fullWidth,
					[styles.disabled]: disabled,
				},
			),
			...props,
		},
		children,
	);
}

type ButtonType = <TTag extends ReactTag>(
	props: ButtonProps<TTag> & React.RefAttributes<React.ComponentRef<TTag>>,
) => ReturnType<typeof ButtonInner>;

const Button = React.forwardRef(ButtonInner) as ButtonType;

export { Button };
