import React from 'react';
import { Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

function getTitle(location) {
	console.log(location);

	switch (location.pathname) {
		case '/pages/received':
			return 'Atividades - Entradas';

		case '/pages/expenses':
			return 'Atividades - Saídas';

		case '/pages/categories':
			return 'Categorias de Atividades';

		default:
			return 'Dashboard';
	}
}

export default function TopBarTitle(props) {
	const classes = props.classes;
	const title = getTitle(useLocation());
	return (
		<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
			Finanças - {title}
		</Typography>
	);
}
