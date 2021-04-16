import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { initialize } from 'redux-form';

import { FINANCES_FORM, TAB_FIN_LIST_EVENTS, TAB_FIN_TEXT_AREA } from '../common/constants';

import { showTabs, selectTab } from '../common/tab/TabActions';

const INITIAL_VALUES = { credits: [{}], debts: [{}] };

function showTab(billingCycle, idTab) {
	return [showTabs(idTab), selectTab(idTab), initialize(FINANCES_FORM, billingCycle)];
}

export function init() {
	return [
		showTabs(TAB_FIN_LIST_EVENTS, TAB_FIN_TEXT_AREA),
		selectTab(TAB_FIN_LIST_EVENTS),

		initialize(FINANCES_FORM, INITIAL_VALUES),
	];
}
