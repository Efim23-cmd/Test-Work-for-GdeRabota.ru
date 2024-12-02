import React from 'react';

import { SizeType } from '@type/size';

export type IconProps = {
	className?: string;
	size?: SizeType;
	icon: React.ForwardRefExoticComponent<
		Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
			title?: string;
			titleId?: string;
		} & React.RefAttributes<SVGSVGElement>
	>;
};
