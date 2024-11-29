import clsx from 'clsx';

import { forwardRef } from 'react';

import { SpinnerProps } from './types';

import styles from './styles.module.css';

export const Spinner = ({ className, ...props }: SpinnerProps) =>
	forwardRef<HTMLSpanElement, SpinnerProps>(() => (
		<span
			className={clsx(styles.spinner, className)}
			aria-hidden="true"
			{...props}
		/>
	));
