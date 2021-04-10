import React from 'react';
import { Link } from 'react-router';

function MenuItem(props) {
	return (
		<li>
			<Link to={props.path}>
				<i className={`fa fa-${props.icon}`}></i>
				<span>{props.label}</span>
			</Link>
		</li>
	);
}

export default MenuItem;
