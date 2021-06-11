import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import NumberFormat from 'react-number-format';

import useStylesListActivities from '../styles/useStylesListActivities';
const useStyles = useStylesListActivities;

const CardTotals = props => {
	const classes = useStyles();

	const getColor = () => {
		switch (props.option) {
			case 'entry':
				return classes.green;
			case 'debit':
				return classes.red;
			case 'result':
			default:
				return classes.blue;
		}
	};

	const getTitle = () => {
		switch (props.option) {
			case 'entry':
				return 'Recebidos';
			case 'debit':
				return 'Despesas';
			case 'result':
			default:
				return 'Resultado';
		}
	};

	return (
		<Card className={`${classes.root} ${getColor()}`}>
			<CardContent>
				<Typography variant="h5" component="h2">
					{getTitle()}
				</Typography>
				<Typography variant="body1" component="p">
					<NumberFormat
						value={props.value}
						decimalScale={2}
						fixedDecimalScale={true}
						thousandSeparator={'.'}
						decimalSeparator={','}
						displayType={'text'}
						prefix={'R$ '}
					/>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CardTotals;
