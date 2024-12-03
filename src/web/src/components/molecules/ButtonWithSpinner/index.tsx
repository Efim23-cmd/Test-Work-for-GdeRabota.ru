import clsx from 'clsx';

import { ForwardedRef, forwardRef } from 'react';

import { Button } from '@atoms/Button';

import { ButtonWithSpinnerProps } from './types';

import SpinnerSvgURL from './static/spinner.svg';

import styles from './styles.module.css';

export const ButtonWithSpinner = forwardRef<
	HTMLButtonElement,
	ButtonWithSpinnerProps
>(
	(
		{ className, loading, disabled, children, ...other },
		ref: ForwardedRef<HTMLButtonElement>,
	) => (
		<Button
			ref={ref}
			className={clsx(styles.buttonWithSpinner, className)}
			disabled={disabled || loading}
			{...other}
		>
			<div
				className={clsx({
					invisible: loading,
				})}
			>
				{children}
			</div>
			{loading && (
				<div className={styles.buttonWithSpinner__container}>
					<div className={styles.buttonWithSpinner__spinner}>
						<img src={SpinnerSvgURL} alt="spinner" />
					</div>
				</div>
			)}
		</Button>
	),
);
