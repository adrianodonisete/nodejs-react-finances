import React from 'react';

function Footer() {
	return (
		<footer className="main-footer">
			<strong>Copyright &copy; {new Date().getFullYear()}</strong>
			<a href="http://cod3r.com.br" target="_blank">
				{' '}
				Cod3r
			</a>
			.
		</footer>
	);
}

export default Footer;
