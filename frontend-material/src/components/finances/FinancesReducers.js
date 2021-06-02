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
			console.log(CREATE_ACTIVITIES);
			return create(action.listActivities, action.onResultShow);

		case GET_ACTIVITIES:
			console.log(GET_ACTIVITIES);
			const params = action.params;
			// 'option=debit&limit=10&sort=-dateEvent'
			return retrieve(params, action.onMountRowsActivities);

		default:
			return state;
	}
};

export default FinancesReducers;
