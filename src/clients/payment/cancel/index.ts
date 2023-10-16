import { RestClient } from '@utils/restClient';

import type { PaymentResponseType } from '../commonTypes';
import type { PaymentCancelClient } from './types';

export default function cancel<R extends PaymentResponseType>({ id, config }: PaymentCancelClient): Promise<R> {
	const cancelBody = {
		status: 'cancelled'
	};
	return RestClient.fetch<R>(
		`/v1/payments/${id}`,
		{
			method: 'PUT',
			headers: {
				'Authorization': `Bearer ${config.accessToken}`,
			},
			body: JSON.stringify(cancelBody),
			...config.options
		}
	);
}
