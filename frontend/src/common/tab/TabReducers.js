import { TAB_SELECTED, TAB_SHOWED } from '../constants';

const INITIAL_STATE = { selected: '', visible: {} };

function TabReducers(state = INITIAL_STATE, action = null) {
	switch (action.type) {
		case TAB_SELECTED:
			return { ...state, selected: action.payload };

		case TAB_SHOWED:
			return { ...state, visible: action.payload };

		default:
			return state;
	}
}

export default TabReducers;
