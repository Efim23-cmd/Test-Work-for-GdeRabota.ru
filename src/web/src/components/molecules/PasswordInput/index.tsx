import { ForwardedRef, forwardRef, useState } from 'react';

import { InputProps } from '@atoms/Input/types';

import { Input } from '@atoms/Input';

import EyeIconURL from './statics/eye.svg';
import EyeSlashIconURL from './statics/eyeSlash.svg';

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
	(props, ref: ForwardedRef<HTMLInputElement>) => {
		const [isShow, setIsShow] = useState(false);

		const onClick = () => {
			setIsShow((previous) => !previous);
		};

		return (
			<Input
				ref={ref}
				{...props}
				type={isShow ? 'text' : 'password'}
				iconEndProps={{
					icon: isShow ? EyeSlashIconURL : EyeIconURL,
					onClick,
				}}
			/>
		);
	},
);
1;
