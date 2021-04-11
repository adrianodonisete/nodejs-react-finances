import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import DashboardReducers from '../dashboard/DashboardReducers';
import TabReducers from '../common/tab/TabReducers';
import BillingCycleReducers from '../billingCycle/BillingCycleReducers';
import AuthReducer from '../auth/AuthReducer';

const rootReducer = combineReducers({
	dashboard: DashboardReducers,
	tab: TabReducers,
	billingCycle: BillingCycleReducers,
	form: formReducer,
	toastr: toastrReducer,
	auth: AuthReducer,
});

export default rootReducer;
