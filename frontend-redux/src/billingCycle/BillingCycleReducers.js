import { BILLING_CYCLE_FETCHED } from '../common/constants';

const INITIAL_STATE = { list: [] };

function BillingCycleReducers(state = INITIAL_STATE, action = null) {
	switch (action.type) {
		case BILLING_CYCLE_FETCHED:
			return { ...state, list: action.payload.data };

		default:
			return state;
	}
}

export default BillingCycleReducers;
