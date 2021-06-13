import React, { useRef } from 'react';
import { Button, Select, TableCell, TableRow, TextField } from '@material-ui/core';
import Date from '../../util/Date';
import Categories from '../../util/Categories';

const ActivitiesFilterForm = props => {
	const optionRef = useRef('');
	const categoryRef = useRef('');
	const dateEventRef = useRef('');
	const descriptionRef = useRef('');
	const valueRef = useRef('');

	const categories = Categories;

	const getMonthsOptions = () =>
		props.months.map(option => (
			<option key={option.date.replaceAll(/[:.]/gi, '-')} value={option.date}>
				{option.text}
			</option>
		));

	const filterHandler = () => {
		const dates = Date.getFirstAndLastDayOfMonth(dateEventRef.current.value);
		const params = {
			sort: 'dateEvent',
			dateEvent__gte: dates.firstDayOfMonth,
			dateEvent__lte: dates.lastDayOfMonth,
		};
		if (['entry', 'debit'].includes(optionRef.current.value)) {
			params.option = optionRef.current.value;
		}
		if (categoryRef.current.value !== '') {
			params.category = categoryRef.current.value.trim();
		}
		if (descriptionRef.current.value !== '') {
			const desc = descriptionRef.current.value.trim();
			params.description__regex = `/${desc}/igm`;
		}
		if (valueRef.current.value !== '') {
			params.value = +valueRef.current.value;
		}

		props.onFilterActivitiesHandler(params);
	};

	return (
		<TableRow style={{ height: '65px', verticalAlign: 'top' }}>
			<TableCell>
				<Button type="button" variant="contained" size="small" color="primary" onClick={filterHandler}>
					Filtrar
				</Button>
			</TableCell>
			<TableCell>{' -- '}</TableCell>
			<TableCell>
				<Select
					inputRef={optionRef}
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
				<Select
					inputRef={categoryRef}
					native
					fullWidth
					inputProps={{
						name: `category`,
						id: `filter-category`,
					}}
				>
					<option key={`category[todos]`} value={''}>
						Todos
					</option>
					{categories.map((cat, key) => (
						<option key={`category[${key}-${cat}]`} value={cat}>
							{cat}
						</option>
					))}
				</Select>
			</TableCell>
			<TableCell>
				<Select
					inputRef={dateEventRef}
					native
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
				<TextField
					inputRef={descriptionRef}
					id={`filter-description`}
					name={`description`}
					fullWidth
					placeholder="descrição..."
				/>
			</TableCell>
			<TableCell>
				<TextField inputRef={valueRef} id={`filter-value`} name={`value`} fullWidth placeholder="valor..." />
			</TableCell>
		</TableRow>
	);
};

export default ActivitiesFilterForm;
