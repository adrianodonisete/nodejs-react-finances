import React, { useCallback, useEffect, useReducer, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Grid } from '@material-ui/core';
import NumberFormat from 'react-number-format';

import If from '../UI/If';
import ProgressWaiting from '../UI/ProgressWaiting';
import Title from '../dashboard/Title';
import CardTotals from './CardTotals';
import FinancesReducers from './FinancesReducers';
import Date from '../../util/Date';

import { GET_ACTIVITIES, PROGRESS_SHOW, TABLE_ITENS } from '../../util/Constants';

const DEFAULT_FORM_ACTIVITIES = {
	items: [],
	total: 0,
	success: true,
};
const DEFAULT_TOTALS = {
	entries: 0,
	debits: 0,
	all: 0,
};
const DEFAULT_PARAMS = {
	type: GET_ACTIVITIES,
	params: {
		limit: '15',
		sort: 'dateEvent',
		dateEvent__gte: '2020-07-01',
		dateEvent__lte: '2020-07-31',
	},
	onMountRowsActivities: null,
};

export default function FinanceActivities(props) {
	const [activitiesState, dispatchActivitiesState] = useReducer(FinancesReducers, DEFAULT_FORM_ACTIVITIES);
	console.log(activitiesState);

	const [optionShowContent, setOptionShowContent] = useState(PROGRESS_SHOW);
	const [rowsActivities, setRowsActivities] = useState([]);
	const [totals, setTotals] = useState(DEFAULT_TOTALS);

	const mountRowsHandler = results => {
		setRowsActivities(results);
		setTotals(
			results.reduce((totalsAcc, curRow) => {
				const entries = curRow.option === 'entry' ? totalsAcc.entries + curRow.value : totalsAcc.entries;
				const debits = curRow.option === 'entry' ? totalsAcc.entries : totalsAcc.entries + curRow.value;
				return {
					entries: entries,
					debits: debits,
					all: totalsAcc.all + curRow.value,
				};
			}, DEFAULT_TOTALS)
		);
		setOptionShowContent(TABLE_ITENS);
	};

	const getActivitiesHandler = useCallback(params => {
		dispatchActivitiesState(params);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			getActivitiesHandler({
				...DEFAULT_PARAMS,
				onMountRowsActivities: mountRowsHandler,
			});
		}, 500);
	}, [getActivitiesHandler]);

	const getTitle = () => {
		return props.option === 'expenses' ? 'Atividades Maio/21' : 'Despesas Maio/21';
	};

	const getListActivities = () =>
		rowsActivities.map(row => (
			<TableRow key={row._id}>
				<TableCell>{row._id}</TableCell>
				<TableCell>{row.option === 'entry' ? 'Entrada' : 'Saída'}</TableCell>
				<TableCell>{row.category}</TableCell>
				<TableCell>{Date.formatDateToDayMonthYear(row.dateEvent)}</TableCell>
				<TableCell>{row.description}</TableCell>
				<TableCell>
					<NumberFormat
						value={+row.value}
						decimalScale={2}
						fixedDecimalScale={true}
						thousandSeparator={'.'}
						decimalSeparator={','}
						displayType={'text'}
						prefix={'R$ '}
					/>
				</TableCell>
			</TableRow>
		));

	return (
		<React.Fragment>
			<If show={optionShowContent === PROGRESS_SHOW}>
				<ProgressWaiting />
			</If>

			<If show={optionShowContent === TABLE_ITENS}>
				<Grid>
					<CardTotals option="entry" value={totals.entries} />
					<CardTotals option="debit" value={totals.debits} />
					<CardTotals option="all" value={totals.all} />
				</Grid>

				<Grid>
					<Title>{getTitle()}</Title>
					<Table size="small">
						<TableHead>
							<TableRow>
								<TableCell>ID</TableCell>
								<TableCell>Operação</TableCell>
								<TableCell>Categoria</TableCell>
								<TableCell>Data Evento</TableCell>
								<TableCell>Descrição</TableCell>
								<TableCell>Valor</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>{getListActivities()}</TableBody>
					</Table>
				</Grid>
			</If>
		</React.Fragment>
	);
}
