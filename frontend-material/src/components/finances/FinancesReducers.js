import { create, retrieve } from './FinancesActions';

import { CREATE_ACTIVITIES, GET_ACTIVITIES } from '../../util/Constants';

const INITIAL_STATE = {
	items: [],
	total: 0,
	optionShow: '',
	success: true,
};

const FinancesReducers = (state = INITIAL_STATE, action = null) => {
	switch (action.type) {
		case CREATE_ACTIVITIES:
			return create(action.listActivities, action.onResultShow);

		case GET_ACTIVITIES:
			const params = action.params;
			return retrieve(params, action.onMountRowsActivities);

		default:
			return state;
	}
};

export default FinancesReducers;
