import { TAB_SELECTED, TAB_SHOWED } from '../constants';

export function selectTab(tabId) {
	return {
		type: TAB_SELECTED,
		payload: tabId,
	};
}

export function showTabs(...tabIds) {
	const tabsToShow = {};
	for (const tabId of tabIds) {
		tabsToShow[tabId] = true;
	}
	return {
		type: TAB_SHOWED,
		payload: tabsToShow,
	};
}
