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

export const PaymentForm = () => {
	const cardNumber = useTextFormField({
		formatter: numberCard,
		validators: [
			required('Необходимо заполнить "Номер карты".'),
			isNumberCard(),
		],
	});

	const monthAndYear = useTextFormField({
		formatter: yearAndMonth,
		validators: [
			required('Необходимо заполнить "Месяц/Год".'),
			isYearAndMonth(),
		],
	});

	const code = useTextFormField({
		validators: [required('Необходимо заполнить "Код".'), length(3)],
	});

	const owner = useTextFormField({
		validators: [required('Необходимо заполнить "Владелец карты".')],
	});

	const { handleFormSubmit, hasFieldErrors } = useForm<TextField, string>({
		fields: [cardNumber, monthAndYear, code, owner],
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
							value={cardNumber.value}
							onChange={cardNumber.handleChange}
							onBlur={cardNumber.handleBlur}
							helperText={cardNumber.error}
							error={!!cardNumber.error}
						/>
						<Input
							label="Месяц/Год"
							placeholder="Default"
							value={monthAndYear.value}
							onChange={monthAndYear.handleChange}
							onBlur={monthAndYear.handleBlur}
							helperText={monthAndYear.error}
							error={!!monthAndYear.error}
						/>
						<Input
							label="Код"
							placeholder="***"
							value={code.value}
							onChange={code.handleChange}
							onBlur={code.handleBlur}
							helperText={code.error}
							error={!!code.error}
						/>
						<Input
							label="Владелец карты"
							className="col-span-2"
							placeholder="IVAN IVANOV"
							fullWidth
							value={owner.value}
							onChange={owner.handleChange}
							onBlur={owner.handleBlur}
							helperText={owner.error}
							error={!!owner.error}
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
