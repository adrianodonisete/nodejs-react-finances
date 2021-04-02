import { combineReducers } from 'redux';

import DashboardReducers from '../dashboard/DashboardReducers';
import TabReducers from '../common/tab/TabReducers';
import BillingCycleReducers from '../billingCycle/BillingCycleReducers';

const rootReducer = combineReducers({
	dashboard: DashboardReducers,
	tab: TabReducers,
	billingCycle: BillingCycleReducers,
});

export default rootReducer;
