import clsx from 'clsx';

import { ForwardedRef, forwardRef, useId } from 'react';

import { Field } from '@atoms/Field';
import { Icon } from '@atoms/Icon';

import type { InputProps } from './types';

import styles from './styles.module.css';

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			type = 'text',
			id: idProp,
			className,
			helperText,
			label,
			error,
			disabled,
			required,
			inputClassName,
			fullWidth,
			textStart,
			textEnd,
			iconStartProps,
			iconEndProps,
			...other
		}: InputProps,
		ref: ForwardedRef<HTMLInputElement>,
	) => {
		const nestedId = useId();
		const id = idProp ?? nestedId;

		return (
			<Field
				id={id}
				className={className}
				label={label}
				helperText={helperText}
				required={required}
				error={error}
				disabled={disabled}
			>
				<div
					className={clsx(styles.input, {
						[styles.error]: error,
						[styles.disabled]: disabled,
						[styles.fullWidth]: fullWidth,
					})}
				>
					{(iconStartProps || textStart) && (
						<label
							htmlFor={id}
							className={styles.input__label}
							onClick={iconStartProps?.onClick}
						>
							{iconStartProps ? <Icon {...iconStartProps} /> : textStart}
						</label>
					)}
					<input
						id={nestedId}
						type={type}
						ref={ref}
						disabled={disabled}
						className={clsx(styles.input__container, inputClassName)}
						{...other}
					/>
					{(iconEndProps || textEnd) && (
						<label
							htmlFor={nestedId}
							className={styles.input__label}
							onClick={iconEndProps?.onClick}
						>
							{iconEndProps ? <Icon {...iconEndProps} /> : textEnd}
						</label>
					)}
				</div>
			</Field>
		);
	},
);
1;
