import clsx from 'clsx';

import type { IconProps } from './types';

import styles from './styles.module.css';

export const Icon = ({
	className,
	size = 'md',
	icon: IconInner,
}: IconProps) => (
	<IconInner
		aria-hidden="true"
		className={clsx(styles.icon, styles[size], className)}
	/>
);
