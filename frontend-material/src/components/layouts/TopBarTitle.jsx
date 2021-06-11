import React from 'react';
import { Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

function getTitle(location) {
	switch (location.pathname) {
		case '/pages/activities':
			return 'Atividades';

		case '/pages/activities/register':
			return 'Cadastrar Atividades';

		case '/pages/activities/validation':
			return 'Cadastrar Atividades - Validação';

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
