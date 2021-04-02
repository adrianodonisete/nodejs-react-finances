import React from 'react';
import { Router, hashHistory, Route, Redirect } from 'react-router';

import BillingCycle from '../billingCycle/BillingCycle';
import Dashboard from '../dashboard/Dashboard';

function Routes() {
	return (
		<Router history={hashHistory}>
			<Route path="/" component={Dashboard} />
			<Route path="/billingCycles" component={BillingCycle} />
			<Redirect from="*" to="/" />
		</Router>
	);
}

export default Routes;
