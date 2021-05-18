const CREATE_ACTIVITIES = 'CREATE_ACTIVITIES';
const GET_ACTIVITIES = 'GET_ACTIVITIES';

const INITIAL_STATE = { list: [] };

const FinancesReducers = (state = INITIAL_STATE, action = null) => {
	switch (action.type) {
		case CREATE_ACTIVITIES:
			return { ...state, list: action.payload.data };

		case GET_ACTIVITIES:
			return { ...state, list: action.payload.data };

		default:
			return state;
	}
};

export default FinancesReducers;
