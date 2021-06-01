import { create, retrieve } from './FinancesActions';

const CREATE_ACTIVITIES = 'CREATE_ACTIVITIES';
const GET_ACTIVITIES = 'GET_ACTIVITIES';

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
			return retrieve('option=debit&limit=10&sort=-dateEvent', action.onResultShow);

		default:
			return state;
	}
};

export default FinancesReducers;
