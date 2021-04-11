import { BILLING_SUMMARY_FETCHED } from '../common/constants';

const INITIAL_STATE = { summary: { credit: 0, debt: 0 } };

function DashboardReducers(state = INITIAL_STATE, action = null) {
	switch (action.type) {
		case BILLING_SUMMARY_FETCHED:
			return { ...state, summary: action.payload.data };

		default:
			return state;
	}
}

export default DashboardReducers;
