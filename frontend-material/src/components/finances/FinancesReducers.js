import { create } from './FinancesActions';

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
			return create(action.listActivities);

		case GET_ACTIVITIES:
			return { ...state, list: action.payload.data, success: true };

		default:
			return state;
	}
};

export default FinancesReducers;
