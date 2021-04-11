import React from 'react';
import { HashRouter } from 'react-router-dom';

import Header from '../common/template/Header';
import SideBar from '../common/template/SideBar';
import Footer from '../common/template/Footer';
import Messages from '../common/msg/Messages';

import Routes from './Routes';

function App(props) {
	return (
		<HashRouter>
			<div className="wrapper">
				<Header />
				<SideBar />
				<Routes />
				<Footer />
				<Messages />
			</div>
		</HashRouter>
	);
}

export default App;
