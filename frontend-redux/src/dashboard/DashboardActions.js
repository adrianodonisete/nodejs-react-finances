import axios from 'axios';

import { BILLING_SUMMARY_FETCHED, BASE_URL } from '../common/constants';

export function getSummary() {
	const request = axios.get(`${BASE_URL}/billingCycles/summary`);
	return {
		type: BILLING_SUMMARY_FETCHED,
		payload: request,
	};
}
