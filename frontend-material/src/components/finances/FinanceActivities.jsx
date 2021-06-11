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
import ActivitiesFilterForm from './ActivitiesFilterForm';

const DEFAULT_FORM_ACTIVITIES = {
	items: [],
	total: 0,
	success: true,
};
const DEFAULT_TOTALS = {
	entries: 0,
	debits: 0,
	result: 0,
};

export default function FinanceActivities(props) {
	const [activitiesState, dispatchActivitiesState] = useReducer(FinancesReducers, DEFAULT_FORM_ACTIVITIES);
	console.log(activitiesState);

	const [optionShowContent, setOptionShowContent] = useState(PROGRESS_SHOW);
	const [rowsActivities, setRowsActivities] = useState([]);
	const [months, setMonths] = useState([]);
	const [totals, setTotals] = useState(DEFAULT_TOTALS);

	const defaultParams = () => {
		const dates = Date.getFirstAndLastDayOfMonth('2021-05-01');
		return {
			sort: 'dateEvent',
			dateEvent__gte: dates.firstDayOfMonth,
			dateEvent__lte: dates.lastDayOfMonth,
		};
	};

	const mountRowsHandler = results => {
		setRowsActivities(results);

		const result = results.reduce(
			(totalsAcc, curRow) => {
				let entries = totalsAcc.entries;
				let debits = totalsAcc.debits;

				if (curRow.option === 'entry') {
					entries = totalsAcc.entries + curRow.value;
				} else if (curRow.option === 'debit') {
					debits = totalsAcc.debits + curRow.value;
				}
				return {
					entries: entries,
					debits: debits,
				};
			},
			{
				entries: 0,
				debits: 0,
			}
		);
		setTotals({
			...result,
			result: result.entries - result.debits,
		});

		setOptionShowContent(TABLE_ITENS);
	};

	const getActivitiesHandler = useCallback(action => {
		dispatchActivitiesState(action);
	}, []);

	useEffect(() => {
		getActivitiesHandler({
			type: GET_ACTIVITIES,
			params: defaultParams(),
			onMountRowsActivities: mountRowsHandler,
		});
		setMonths(Date.getLastMonths());
	}, [getActivitiesHandler]);

	const filterActivitiesHandler = params => {
		getActivitiesHandler({
			type: GET_ACTIVITIES,
			params: params,
			onMountRowsActivities: mountRowsHandler,
		});
	};

	const getTitle = () => {
		return 'Atividades';
	};

	const getListActivities = () =>
		rowsActivities.map(row => (
			<TableRow key={row._id}>
				<TableCell>{' -- '}</TableCell>
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
					<CardTotals option="result" value={totals.result} />
				</Grid>

				<Grid>
					<Title>{getTitle()}</Title>
					<Table size="small">
						<TableHead>
							<ActivitiesFilterForm onFilterActivitiesHandler={filterActivitiesHandler} months={months} />

							<TableRow>
								<TableCell>Ações</TableCell>
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
