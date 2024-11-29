import { GetValidator } from '../type';

const domains: string[] = [
	'@gmail.com',
	'@mail.yandex.ru',
	'@mail.ru',
	'@outlook.com',
	'@mail.yahoo.com',
	'@mail.rambler.ru',
	'@www.inbox.com',
	'@webmail.aol.com',
];

//TODO

const email: GetValidator<string, string> = () => {
	return async (value) => {
		for (const domain of domains) {
			if (value.indexOf(domain) !== -1) {
				return null;
			}
		}
		return 'Значение «Email» не является правильным email адресом.';
	};
};

export default email;
