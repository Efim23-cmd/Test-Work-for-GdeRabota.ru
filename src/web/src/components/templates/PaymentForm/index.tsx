import { useId } from 'react';

import { Paper } from '@atoms/Paper';
import Input from '@atoms/Input';
import { Button } from '@atoms/Button';

import useForm from '@hooks/useForm';
import useTextFormField, { TextField } from '@hooks/useTextFormField';

import { maxLength, minLength, required } from '@utils/validator';

import styles from './styles.module.css';

export const PaymentForm = () => {
	const cardNumberInputId = useId();
	const cardNumber = useTextFormField(cardNumberInputId, {
		validators: [
			required('Необходимо заполнить "Номер карты".'),
			minLength(16),
			maxLength(16),
		],
	});

	const { handleFormSubmit, hasFieldErrors } = useForm<TextField, string>({
		fields: [cardNumber],
		apiCall: async () => Promise.resolve('good'),
		onSuccess: (response: string) => {
			console.log(response);
		},
		onError: (error: string) => {
			console.log(error);
		},
	});

	return (
		<form onSubmit={handleFormSubmit}>
			<Paper className={styles.paymentForm}>
				<div className={styles.paymentForm__container}>
					<h1 className={styles.paymentForm__header}>
						Оплата банковской картой
					</h1>
					<div className={styles.paymentForm__body}>
						<Input
							label="Номер карты"
							className="col-span-2"
							placeholder="0000 0000 0000 0000"
							fullWidth
							id={cardNumber.id}
							value={cardNumber.value}
							onChange={cardNumber.handleChange}
							onBlur={cardNumber.handleBlur}
							helperText={cardNumber.error}
							error={!!cardNumber.error}
						/>
						<Input label="Месяц/Год" placeholder="Default" />
						<Input label="Код" placeholder="***" />
						<Input
							label="Владелец карты"
							className="col-span-2"
							placeholder="IVAN IVANOV"
							fullWidth
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
