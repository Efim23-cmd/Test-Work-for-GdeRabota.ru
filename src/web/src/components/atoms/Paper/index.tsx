import clsx from 'clsx';

import { createElement, ForwardedRef, forwardRef } from 'react';

import styles from './styles.module.css';
import { ReactTag } from '@type/mutationComponent';
import { PaperProps } from './types';

function PaperInner<TTag extends ReactTag>(
	{ as, className, rounded = true, children, ...other }: PaperProps<TTag>,
	ref: ForwardedRef<TTag>,
) {
	return createElement(
		as ?? 'div',
		{
			ref,
			className: clsx(
				styles.paper,
				{
					[styles.rounded]: rounded,
				},
				className,
			),
		},
		children,
	);
}

type ButtonType = <TTag extends ReactTag>(
	props: PaperProps<TTag> & React.RefAttributes<React.ComponentRef<TTag>>,
) => ReturnType<typeof PaperInner>;

const Paper = forwardRef(PaperInner) as ButtonType;

export { Paper };
