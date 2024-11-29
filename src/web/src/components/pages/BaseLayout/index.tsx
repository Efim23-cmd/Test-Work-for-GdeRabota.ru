import { HTMLAttributes } from 'react';

import styles from './styles.module.css';

export function BaseLayout({ children }: HTMLAttributes<HTMLDivElement>) {
	return <div className={styles.baseLayout}>{children}</div>;
}
