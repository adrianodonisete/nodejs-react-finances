import React from 'react';
import { Grid, Select, TextField } from '@material-ui/core';

import Categories from '../../util/Categories';

const GridActivity = props => {
	const activity = props.activity;
	const key = props.index;
	const changeHandler = props.changeHandler;

	const categories = Categories.getCategories();

	return (
		<Grid key={`container-${key}-idx`} container spacing={3}>
			<Grid item xs={1}>
				<strong>{+key + 1}</strong>
			</Grid>
			<Grid key={`option-${key}-idx`} item xs={2}>
				<Select
					native
					defaultValue={activity.option}
					onChange={changeHandler}
					fullWidth
					inputProps={{
						name: `option[${key}]`,
						id: `option-${key}`,
					}}
				>
					<option value={'entry'}>Entrada</option>
					<option value={'debit'}>Saída</option>
				</Select>
			</Grid>
			<Grid key={`dateEvent-${key}-idx`} item xs={2}>
				<TextField
					required
					id={`dateEvent-${key}`}
					name={`dateEvent[${key}]`}
					placeholder="Data"
					onChange={changeHandler}
					defaultValue={activity.dateEvent}
					fullWidth
				/>
			</Grid>
			<Grid key={`value-${key}-idx`} item xs={2}>
				<TextField
					required
					id={`value-${key}`}
					name={`value[${key}]`}
					placeholder="Valor"
					onBlur={changeHandler}
					defaultValue={activity.value}
					fullWidth
				/>
			</Grid>
			<Grid key={`description-${key}-idx`} item xs={3}>
				<TextField
					required
					id={`description-${key}`}
					name={`description[${key}]`}
					placeholder="Descrição"
					onBlur={changeHandler}
					defaultValue={activity.description}
					fullWidth
				/>
			</Grid>
			<Grid key={`category-${key}-idx`} item xs={2}>
				<Select
					native
					defaultValue={activity.category}
					onChange={changeHandler}
					fullWidth
					inputProps={{
						name: `category[${key}]`,
						id: `category-${key}`,
					}}
				>
					{categories.map(cat => (
						<option value={cat}>{cat}</option>
					))}
				</Select>
			</Grid>
		</Grid>
	);
};

export default GridActivity;
