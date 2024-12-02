import { useRef } from 'react';

import { PasswordInput } from '@molecules/PasswordInput';

import { Paper } from '@atoms/Paper';
import { Input } from '@atoms/Input';
import { Button } from '@atoms/Button';

import useForm from '@hooks/useForm';
import useTextFormField, { TextField } from '@hooks/useTextFormField';

import {
	length,
	isNumberCard,
	isYearAndMonth,
	numberCard,
	required,
} from '@utils/validator';

import styles from './styles.module.css';
import { yearAndMonth } from '@utils/validator/formatters/yearAndMonth';

type Request = {
	jsonrpc: string;
	id: string;
	method: string;
	params: {
		pan: string;
		expire: string;
		cardholder: string;
		cvc: string;
	};
};

type Response = {
	jsonrpc: string;
	id: string;
	result: {
		pid: string;
	};
};

export const PaymentForm = () => {
	const formRef = useRef<HTMLFormElement>(null);

	const cardNumberField = useTextFormField({
		formatter: numberCard,
		validators: [
			required('Необходимо заполнить "Номер карты".'),
			isNumberCard(),
		],
	});

	const expireField = useTextFormField({
		formatter: yearAndMonth,
		validators: [
			required('Необходимо заполнить "Месяц/Год".'),
			isYearAndMonth(),
		],
	});

	const cvcField = useTextFormField({
		validators: [required('Необходимо заполнить "Код".'), length(3)],
	});

	const cardholderField = useTextFormField({
		validators: [required('Необходимо заполнить "Владелец карты".')],
	});

	const { handleFormSubmit, hasFieldErrors } = useForm<TextField, Response>({
		fields: [cardNumberField, expireField, cvcField, cardholderField],
		apiCall: async () => {
			if (formRef.current) {
				const { pan, expire, cardholder, cvc } = Object.fromEntries(
					new FormData(formRef.current),
				) as Request['params'];

				if (pan && expire && cardholder && cvc) {
					const request: Request = {
						id: '1',
						jsonrpc: '2.0',
						method: 'pay',
						params: {
							pan,
							expire,
							cardholder,
							cvc,
						},
					};

					const myFetch = await fetch('/api/', {
						method: 'POST',
						headers: {
							Accept: 'application/json',
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(request),
					});

					if (!myFetch.ok) {
						throw new Error('Network error');
					}

					const data = (await myFetch.json()) as Response;

					return data;
				}

				throw new Error('Invalid data');
			}

			throw new Error('The form does not exist');
		},
		onSuccess: (response: Response) => {
			console.log(response);
		},
		onError: (error: string) => {
			console.log(error);
		},
	});

	return (
		<form onSubmit={handleFormSubmit} ref={formRef}>
			<Paper className={styles.paymentForm}>
				<div className={styles.paymentForm__container}>
					<h1 className={styles.paymentForm__header}>
						Оплата банковской картой
					</h1>
					<div className={styles.paymentForm__body}>
						<Input
							name="pan"
							label="Номер карты"
							className="col-span-2"
							placeholder="0000 0000 0000 0000"
							fullWidth
							value={cardNumberField.value}
							onChange={cardNumberField.handleChange}
							onBlur={cardNumberField.handleBlur}
							helperText={cardNumberField.error}
							error={!!cardNumberField.error}
						/>
						<Input
							name="expire"
							label="Месяц/Год"
							placeholder="Default"
							value={expireField.value}
							onChange={expireField.handleChange}
							onBlur={expireField.handleBlur}
							helperText={expireField.error}
							error={!!expireField.error}
						/>
						<PasswordInput
							name="cvc"
							label="Код"
							placeholder="***"
							value={cvcField.value}
							onChange={cvcField.handleChange}
							onBlur={cvcField.handleBlur}
							helperText={cvcField.error}
							error={!!cvcField.error}
						/>
						<Input
							name="cardholder"
							label="Владелец карты"
							className="col-span-2"
							placeholder="IVAN IVANOV"
							fullWidth
							value={cardholderField.value}
							onChange={cardholderField.handleChange}
							onBlur={cardholderField.handleBlur}
							helperText={cardholderField.error}
							error={!!cardholderField.error}
						/>
					</div>
				</div>
				<div className={styles.paymentForm__footer}>
					<Button type="submit" disabled={hasFieldErrors}>
						Оплатить
					</Button>
				</div>
			</Paper>
		</form>
	);
};
