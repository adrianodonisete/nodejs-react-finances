import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Content from './components/layouts/Content';

function App() {
	return (
		<Router>
			<Content />
		</Router>
	);
}

export default App;
