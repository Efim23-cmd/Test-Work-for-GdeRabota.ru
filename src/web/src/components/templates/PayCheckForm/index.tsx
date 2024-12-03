import { useEffect, useState } from 'react';

import { Paper } from '@atoms/Paper';

import ErrorSvgURL from './static/error.svg';
import SuccessSvgURL from './static/success.svg';

import styles from './styles.module.css';

type Response = {
	status: 'ok' | 'process' | 'fail';
	pid: string;
};

type PayCheckFormProps = {
	pid: string;
};

export const PayCheckForm = ({ pid }: PayCheckFormProps) => {
	const [status, setStatus] = useState<Response['status']>('process');

	useEffect(() => {
		const abortController = new AbortController();

		const myPromise = async () => {
			try {
				const myFetch = await fetch(`/api/pay/check/${pid}`, {
					method: 'GET',
					signal: abortController.signal,
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
				});

				if (!myFetch.ok) {
					throw new Error('Network error');
				}

				const response = (await myFetch.json()) as Response;

				if (response.status) {
					setStatus(response.status);
				} else {
					setStatus('fail');
				}
			} catch (error) {
				console.log(error);
			}
		};
		myPromise();

		const timeoutId = setTimeout(() => {
			myPromise();
		}, 1000);

		return () => {
			abortController.abort();
			clearTimeout(timeoutId);
		};
	}, [pid]);

	return (
		<Paper className={styles.paycheckForm}>
			<div className={styles.paycheckForm__container}>
				{status === 'ok' && (
					<>
						<img
							className={styles.paycheckForm__icon}
							src={SuccessSvgURL}
							alt="success"
						/>
						<h1 className={styles.paycheckForm__header}>
							Оплата прошла успешно
						</h1>
					</>
				)}
				{status === 'fail' && (
					<>
						<img
							className={styles.paycheckForm__icon}
							src={ErrorSvgURL}
							alt="error"
						/>
						<h1 className={styles.paycheckForm__header}>Произошла ошибка</h1>
					</>
				)}
				{status === 'process' && (
					<>
						<h1 className={styles.paycheckForm__header}>Ожидайте...</h1>
					</>
				)}
			</div>
		</Paper>
	);
};
