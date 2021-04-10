import React from 'react';
import { Router, hashHistory, IndexRoute, Route, Redirect } from 'react-router';

import App from './App';
import BillingCycle from '../billingCycle/BillingCycle';
import Dashboard from '../dashboard/Dashboard';

function Routes() {
	return (
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Dashboard} />
				<Route path="dash" component={Dashboard} />
				<Route path="billingCycles" component={BillingCycle} />
			</Route>
			<Redirect from="*" to="/" />
		</Router>
	);
}

export default Routes;
