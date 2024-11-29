import clsx from 'clsx';

import { forwardRef } from 'react';

import type { InputProps } from './types';

import styles from './styles.module.css';

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			type = 'text',
			className,
			value,
			helperText,
			label,
			error,
			required,
			disabled,
			inputClassName,
			readOnly,
			fullWidth,
			...inputProps
		},
		ref,
	) => (
		<div className={clsx(styles.input, className)}>
			<label className={styles.input__label}>{label}</label>
			<input
				type={type}
				disabled={disabled}
				{...inputProps}
				className={clsx(
					styles.input__container,
					inputClassName,
					{
						[styles.error]: error,
						[styles.disabled]: disabled,
						[styles.fullWidth]: fullWidth,
					},
					inputClassName,
				)}
				required={required}
				ref={ref}
				readOnly={readOnly}
				value={value}
			/>
			<span
				className={clsx('-bottom-5 left-0 text-body-2', {
					'text-error': error,
					'text-grey-600 dark:text-grey-400': !error,
					'text-grey-600': disabled,
					'line-clamp-3': typeof helperText === 'string',
				})}
			>
				{helperText}
			</span>
		</div>
	),
);
export default Input;
