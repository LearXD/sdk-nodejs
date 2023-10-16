import { RestClient } from '@utils/restClient';

import type { PaymentResponseType } from '../commonTypes';
import type { PaymentCaptureClient } from './types';

export default function capture<R extends PaymentResponseType>({ id, transaction_amount, config }: PaymentCaptureClient): Promise<R> {
	const captureBody = {
		capture: true,
		transaction_amount
	};

	return RestClient.fetch<R>(
		`/v1/payments/${id}`,
		{
			method: 'PUT',
			headers: {
				'Authorization': `Bearer ${config.accessToken}`,
			},
			body: JSON.stringify(captureBody),
			...config.options
		}
	);
}
