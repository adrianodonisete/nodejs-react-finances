import React, { useRef } from 'react';
import { Button, Select, TableCell, TableRow, TextField } from '@material-ui/core';
import Date from '../../util/Date';

const ActivitiesFilterForm = props => {
	const optionRef = useRef();
	const categoryRef = useRef();
	const dateEventRef = useRef();
	const descriptionRef = useRef();
	const valueRef = useRef();

	const getMonthsOptions = () => props.months.map(option => <option value={option.date}>{option.text}</option>);

	const filterHandler = () => {
		const dates = Date.getFirstAndLastDayOfMonth(dateEventRef.current.value);
		console.log(dateEventRef.current.value);

		const params = {
			sort: 'dateEvent',
			dateEvent__gte: dates.firstDayOfMonth,
			dateEvent__lte: dates.lastDayOfMonth,
		};

		props.onFilterActivitiesHandler(params);
	};

	return (
		<TableRow>
			<TableCell>
				<Button type="button" variant="contained" size="small" color="primary" onClick={filterHandler}>
					Filtrar
				</Button>
			</TableCell>
			<TableCell>{' -- '}</TableCell>
			<TableCell>
				<Select
					ref={optionRef}
					native
					defaultValue={'all'}
					fullWidth
					inputProps={{
						name: `option`,
						id: `filter-option`,
					}}
				>
					<option value={'all'}>Todos</option>
					<option value={'entry'}>Entrada</option>
					<option value={'debit'}>Saída</option>
				</Select>
			</TableCell>
			<TableCell>
				<TextField ref={categoryRef} id={`filter-category`} name={`category`} fullWidth />
			</TableCell>
			<TableCell>
				<Select
					ref={dateEventRef}
					native
					defaultValue={'entry'}
					fullWidth
					inputProps={{
						name: `dateEvent`,
						id: `filter-dateEvent`,
					}}
				>
					{getMonthsOptions()}
				</Select>
			</TableCell>
			<TableCell>
				<TextField ref={descriptionRef} id={`filter-description`} name={`description`} fullWidth />
			</TableCell>
			<TableCell>
				<TextField ref={valueRef} id={`filter-value`} name={`value`} fullWidth />
			</TableCell>
		</TableRow>
	);
};

export default ActivitiesFilterForm;
