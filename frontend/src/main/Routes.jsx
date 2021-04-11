import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import BillingCycle from '../billingCycle/BillingCycle';
import Dashboard from '../dashboard/Dashboard';

function Routes(props) {
	return (
		<div className="content-wrapper">
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/dash" component={Dashboard} />
				<Route exact path="/billingCycles" component={BillingCycle} />
				<Redirect from="*" to="/" />
			</Switch>
		</div>
	);
}

export default Routes;
