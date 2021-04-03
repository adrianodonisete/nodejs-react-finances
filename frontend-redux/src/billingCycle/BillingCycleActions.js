import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm } from 'redux-form';

import { showTabs, selectTab } from '../common/tab/TabActions';

import { BILLING_CYCLE_FETCHED, BILLING_CYCLE_FORM, TAB_CREATE, TAB_LIST, BASE_URL } from '../common/constants';

export function getList() {
	const request = axios.get(`${BASE_URL}/billingCycles`);
	return {
		type: BILLING_CYCLE_FETCHED,
		payload: request,
	};
}

export function create(values) {
	return dispatch => {
		axios
			.post(`${BASE_URL}/billingCycles`, values)
			.then(resp => {
				toastr.success('Sucesso!', 'Operação realizada com sucesso.');
				dispatch([
					resetForm(BILLING_CYCLE_FORM),
					getList(),
					selectTab(TAB_LIST),
					showTabs(TAB_LIST, TAB_CREATE),
				]);
			})
			.catch(e => {
				e.response.data.errors.forEach(err => toastr.error('Erro!', err));
			});
	};
}
