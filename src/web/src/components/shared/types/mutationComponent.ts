/* 
Типы для создания элементов, которые могут менять тег контейнера 

Пример:
    function Element<TTag extends ReactTag>({as}: OurProps<TTag> & CleanProps<TTag>): JSX.Element {
        return React.createElement(
            as ?? 'div',
            {
                className: clsx(styles.root, styles[variant], styles[size], className),
                ...other,
            },
            children,
        );
    }
*/
import React, { JSXElementConstructor, ReactNode } from 'react';

export type ReactTag = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;

export type PropsOf<TTag extends ReactTag> = TTag extends React.ElementType
	? React.ComponentPropsWithoutRef<TTag>
	: never;

export type PropsWeControl = 'as' | 'children' | 'className';

export type CleanProps<TTag extends ReactTag> = Omit<
	PropsOf<TTag>,
	PropsWeControl
>;

export type OurProps<TTag extends ReactTag> = {
	as?: TTag;
	className?: string;
	children?: ReactNode;
};

type TTag<TTag = void, Default = void> = TTag extends ReactTag
	? TTag
	: Default extends ReactTag
		? Default
		: never;

export type MutationComponent<T = void, D = void> = OurProps<TTag<T, D>> &
	CleanProps<TTag<T, D>>;
