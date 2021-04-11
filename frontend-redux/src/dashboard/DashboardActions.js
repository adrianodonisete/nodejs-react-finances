import axios from 'axios';

import { BILLING_SUMMARY_FETCHED, API_URL } from '../common/constants';

export function getSummary() {
	const request = axios.get(`${API_URL}/billingCycles/summary`);
	return {
		type: BILLING_SUMMARY_FETCHED,
		payload: request,
	};
}
