import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Header() {
	return (
		<header className="main-header">
			<Link to="/" className="logo">
				<span className="logo-mini">
					<b>My</b>M
				</span>
				<span className="logo-lg">
					<i className="fa fa-money"></i>
					<b> My</b> Money
				</span>
			</Link>

			<nav className="navbar navbar-static-top">
				<Link to="/" className="sidebar-toggle" data-toggle="offcanvas">
					{' '}
				</Link>
				<Navbar />
			</nav>
		</header>
	);
}

export default Header;
