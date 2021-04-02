import axios from 'axios';

import { BILLING_CYCLE_FETCHED, BASE_URL } from '../common/constants';

export function getList() {
	const request = axios.get(`${BASE_URL}/billingCycles`);
	return {
		type: BILLING_CYCLE_FETCHED,
		payload: request,
	};
}
