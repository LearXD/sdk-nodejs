import { RestClient } from '@src/utils/restClient';
import type { PaymentCreateClient } from './types';
import type { PaymentResponseType } from '../commonTypes';

export default function create<R extends PaymentResponseType>({ body, config }: PaymentCreateClient): Promise<R> {
	return RestClient.fetch<R>(
		'/v1/payments',
		{
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			body: JSON.stringify(body),
			...config.options
		}
	);
}
