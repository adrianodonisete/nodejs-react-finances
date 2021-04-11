import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PagesRoute from './PagesRoute';
import Error404 from '../errors/Error404';
import SignInSide from '../login/SignInSide';

const Content = props => (
	<Switch>
		<Route exact path={['/', '/pages/*']}>
			<PagesRoute />
		</Route>
		<Route exact path="/login">
			<SignInSide />
		</Route>
		<Route path="*">
			<Error404 topBar={true} linkDasboard={true} />
		</Route>
	</Switch>
);

export default Content;
