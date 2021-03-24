import React from 'react';
import { Button, Grid } from '@material-ui/core';

export default function ErrorButtonBack(props) {
	if (!props.linkDasboard) {
		return '';
	}

	const classes = props.classes;
	return (
		<div className={classes.heroButtons}>
			<Grid container spacing={2} justify="center">
				<Grid item>
					<Button color="primary" href="/dashboard">
						Back to home
					</Button>
				</Grid>
			</Grid>
		</div>
	);
}
