import { GetValidator } from '../type';

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);

const DEFAULT_FORMAT = 'YYYY-MM-DD';

export const isDate: GetValidator<string, string> =
	(format = DEFAULT_FORMAT) =>
	async (value) =>
		dayjs(value, format).isValid() ? null : `Не валидная дата`;
