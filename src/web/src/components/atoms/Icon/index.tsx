import clsx from 'clsx';

import type { IconProps } from './types';

import styles from './styles.module.css';

export const Icon = ({
	className,
	size = 'md',
	label,
	icon: IconInner,
}: IconProps) =>
	typeof IconInner === 'function' ? (
		<IconInner
			aria-hidden="true"
			aria-label={label}
			className={clsx(styles.icon, styles[size], className)}
		/>
	) : (
		<img
			className={clsx(styles.icon, styles[size], className)}
			src={IconInner}
			alt={label}
		/>
	);
