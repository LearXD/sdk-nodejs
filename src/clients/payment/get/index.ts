import { RestClient } from '@utils/restClient';

import type { PaymentResponseType } from '../commonTypes';
import type { PaymentGetClient } from './types';

export default function get<R extends PaymentResponseType>({ id, config }: PaymentGetClient): Promise<R> {
	return RestClient.fetch<R>(
		`/v1/payments/${id}`,
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`,
			},
			...config.options
		}
	);
}
