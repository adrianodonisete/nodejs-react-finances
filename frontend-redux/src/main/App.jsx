import '../common/template/dependencies';
import React from 'react';

import Header from '../common/template/Header';
import SideBar from '../common/template/SideBar';
import Footer from '../common/template/Footer';
import Messages from '../common/msg/Messages';

function App(props) {
	return (
		<div className="wrapper">
			<Header />
			<SideBar />
			<div className="content-wrapper">{props.children}</div>
			<Footer />
			<Messages />
		</div>
	);
}

export default App;
