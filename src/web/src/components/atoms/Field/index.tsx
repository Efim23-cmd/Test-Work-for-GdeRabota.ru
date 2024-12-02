import clsx from 'clsx';

import { forwardRef } from 'react';

import { FieldProps } from './types';

import styles from './styles.module.css';

export const Field = forwardRef<HTMLDivElement, FieldProps>(
	(
		{
			id,
			children,
			label,
			helperText,
			error,
			fullWidth,
			required,
			className,
			disabled,
			...wrapperAttr
		},
		ref,
	) => (
		<div
			{...wrapperAttr}
			ref={ref}
			className={clsx(
				styles.field,
				{
					[styles.fullWidth]: fullWidth,
					[styles.error]: error,
					[styles.disabled]: disabled,
				},
				className,
			)}
		>
			<label htmlFor={id} className={styles.field__label}>
				{label}
				{required && <span className={styles.field__required}>*</span>}
			</label>
			{children}
			<span className={styles.field__helperText}>{helperText}</span>
		</div>
	),
);
