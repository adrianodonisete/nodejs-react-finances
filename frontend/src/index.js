import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';

import AuthOrApp from './main/AppOrAuth';
import rootReducer from './main/Reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(multi, thunk, promise)(createStore)(rootReducer, devTools);
ReactDOM.render(
	<Provider store={store}>
		<AuthOrApp />
	</Provider>,
	document.getElementById('app')
);

reportWebVitals();
