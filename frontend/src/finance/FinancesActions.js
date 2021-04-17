import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { initialize } from 'redux-form';

import { FINANCES_FORM, TAB_FIN_CAD_EVENTS_LIST, TAB_FIN_LIST_EVENTS, TAB_FIN_TEXT_AREA } from '../common/constants';

import { showTabs, selectTab } from '../common/tab/TabActions';

const INITIAL_VALUES = { credits: [{}], debts: [{}] };

export function showCreateEvents(finances) {
	return showTab(finances, TAB_FIN_CAD_EVENTS_LIST);
}

function showTab(finances, idTab) {
	return [showTabs(idTab), selectTab(idTab), initialize(FINANCES_FORM, finances)];
}

export function init() {
	return [
		showTabs(TAB_FIN_LIST_EVENTS, TAB_FIN_TEXT_AREA, TAB_FIN_CAD_EVENTS_LIST),
		selectTab(TAB_FIN_LIST_EVENTS),

		initialize(FINANCES_FORM, INITIAL_VALUES),
	];
}
