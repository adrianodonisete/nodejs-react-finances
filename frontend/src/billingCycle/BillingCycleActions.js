import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { initialize } from 'redux-form';

import { showTabs, selectTab } from '../common/tab/TabActions';
import {
	BILLING_CYCLE_FETCHED,
	BILLING_CYCLE_FORM,
	TAB_CREATE,
	TAB_LIST,
	API_URL,
	TAB_UPDATE,
	TAB_DELETE,
} from '../common/constants';

const INITIAL_VALUES = { credits: [{}], debts: [{}] };

export function getList() {
	const request = axios.get(`${API_URL}/billingCycles`);
	return {
		type: BILLING_CYCLE_FETCHED,
		payload: request,
	};
}

export function create(values) {
	return submit(values, 'post');
}

export function update(values) {
	return submit(values, 'put');
}

export function destroy(values) {
	return submit(values, 'delete');
}

function submit(values, method) {
	return dispatch => {
		const id = values._id ? values._id : '';
		axios[method](`${API_URL}/billingCycles/${id}`, values)
			.then(resp => {
				toastr.success('Sucesso!', 'Operação realizada com sucesso.');
				dispatch(init());
			})
			.catch(e => {
				e.response.data.errors.forEach(err => toastr.error('Erro!', err));
			});
	};
}

export function showUpdate(billingCycle) {
	return showTab(billingCycle, TAB_UPDATE);
}

export function showDelete(billingCycle) {
	return showTab(billingCycle, TAB_DELETE);
}

function showTab(billingCycle, idTab) {
	return [showTabs(idTab), selectTab(idTab), initialize(BILLING_CYCLE_FORM, billingCycle)];
}

export function init() {
	return [
		showTabs(TAB_LIST, TAB_CREATE),
		selectTab(TAB_LIST),
		getList(),
		initialize(BILLING_CYCLE_FORM, INITIAL_VALUES),
	];
}
