import React from 'react';
import { Grid } from '@material-ui/core';

import useStylesFormActivities from '../styles/useStylesFormActivities';

const useStyles = useStylesFormActivities;

const HeaderActivity = props => {
	const classes = useStyles();

	return (
		<Grid key={`container-header`} container spacing={3}>
			<Grid className={classes.gridListItem} item xs={1}>
				Linha
			</Grid>
			<Grid key={`option-header`} className={classes.gridListItem} item xs={2}>
				Opção
			</Grid>
			<Grid key={`dateEvent-header`} className={classes.gridListItem} item xs={2}>
				Data
			</Grid>
			<Grid key={`value-header`} className={classes.gridListItem} item xs={2}>
				Valor
			</Grid>
			<Grid key={`description-header`} className={classes.gridListItem} item xs={3}>
				Descrição
			</Grid>
			<Grid key={`category-header`} className={classes.gridListItem} item xs={2}>
				Categoria
			</Grid>
		</Grid>
	);
};

export default HeaderActivity;
