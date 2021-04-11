import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className="main-footer">
			<strong>Copyright &copy; {new Date().getFullYear()}</strong>
			<Link to="http://cod3r.com.br" target="_blank" rel="noreferrer">
				{' '}
				Cod3r
			</Link>
			.
		</footer>
	);
}

export default Footer;
