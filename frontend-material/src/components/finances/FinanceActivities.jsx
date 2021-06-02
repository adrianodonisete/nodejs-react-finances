import React, { useEffect, useReducer, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../dashboard/Title';
import { Grid } from '@material-ui/core';

import If from '../UI/If';
import ProgressWaiting from '../UI/ProgressWaiting';
import FinancesReducers from './FinancesReducers';

import { GET_ACTIVITIES, PROGRESS_SHOW, TABLE_ITENS } from '../../util/Constants';
import Date from '../../util/Date';

function getTitle(props) {
	return props.option === 'expenses' ? 'Despesas' : 'Recebidos';
}

const DEFAULT_FORM_ACTIVITIES = {
	items: [],
	total: 0,
	success: true,
};

export default function FinanceActivities(props) {
	const [activitiesState, dispatchActivitiesState] = useReducer(FinancesReducers, DEFAULT_FORM_ACTIVITIES);
	console.log(activitiesState);

	const [optionShowContent, setOptionShowContent] = useState(PROGRESS_SHOW);
	const [rowsActivities, setRowsActivities] = useState([]);

	const mountRowsHandler = results => {
		console.log(['rrr: ', results]);
		setRowsActivities(results);
		setOptionShowContent(TABLE_ITENS);
	};

	useEffect(() => {
		setTimeout(() => {
			dispatchActivitiesState({
				type: GET_ACTIVITIES,
				params: {
					limit: '20',
					sort: '-dateEvent',
					dateEvent__gte: '2020-07-01',
					dateEvent__lte: '2020-07-31',
				},
				onMountRowsActivities: mountRowsHandler,
			});
		}, 1200);
	}, []);

	const getActivitiesHandler = () => {
		dispatchActivitiesState({
			type: GET_ACTIVITIES,
			params: {
				option: 'debit',
				limit: '5',
				sort: '-dateEvent',
				dateEvent__gte: '2020-07-01',
				dateEvent__lte: '2020-07-31',
			},
			onMountRowsActivities: mountRowsHandler,
		});
	};

	return (
		<React.Fragment>
			<If show={optionShowContent === PROGRESS_SHOW}>
				<ProgressWaiting />
			</If>

			<If show={optionShowContent === TABLE_ITENS}>
				<Grid>
					<Title>{getTitle(props)}</Title>
					<Table size="small">
						<TableHead>
							<TableRow>
								<TableCell>Operação</TableCell>
								<TableCell>Categoria</TableCell>
								<TableCell>Data Evento</TableCell>
								<TableCell>Descrição</TableCell>
								<TableCell align="right">Valor</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rowsActivities.map(row => (
								<TableRow key={row._id}>
									<TableCell>{row.option === 'entry' ? 'Entrada' : 'Saída'}</TableCell>
									<TableCell>{row.category}</TableCell>
									<TableCell>{Date.formatDateToDayMonthYear(row.dateEvent)}</TableCell>
									<TableCell>{row.description}</TableCell>
									<TableCell align="right">{`$${row.value}`}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Grid>
			</If>
		</React.Fragment>
	);
}
