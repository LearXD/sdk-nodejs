import { RestClient } from '@src/utils/restClient';
import type { PaymentSearchClient } from './types';
import { PaymentResponseType } from '../commonTypes';

export default function search<T extends PaymentResponseType>({ options, config }: PaymentSearchClient): Promise<T> {
	return RestClient.fetch<T>(
		'/v1/payments/search',
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			queryParams: {
				...options
			},
			...config.options
		}
	);
}
