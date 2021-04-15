import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import BillingCycle from '../billingCycle/BillingCycle';
import Dashboard from '../dashboard/Dashboard';
import Finances from '../finance/Finances';

function Routes(props) {
	return (
		<div className="content-wrapper">
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/finances" component={Finances} />
				<Route exact path="/billingCycles" component={BillingCycle} />
				<Redirect from="*" to="/" />
			</Switch>
		</div>
	);
}

export default Routes;
