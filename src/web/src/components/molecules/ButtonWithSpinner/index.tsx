import clsx from 'clsx';

import React from 'react';

import { ReactTag } from '@type/mutationComponent';

import { ButtonProps } from '@atoms/Button/types';

import styles from './styles.module.css';
import { Button } from '@atoms/Button';

function ButtonWithSpinnerInner<TTag extends ReactTag>(
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
	return <Button className={styles.buttonWithSpinner}></Button>;
}

type ButtonType = <TTag extends ReactTag>(
	props: ButtonProps<TTag> & React.RefAttributes<React.ComponentRef<TTag>>,
) => ReturnType<typeof ButtonWithSpinnerInner>;

const ButtonWithSpinner = React.forwardRef(
	ButtonWithSpinnerInner,
) as ButtonType;

export { ButtonWithSpinner as Button };
