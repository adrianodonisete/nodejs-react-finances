import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Warning } from '@material-ui/icons';

export default function ErrorAppBar(props) {
	if (!props.topBar) {
		return '';
	}

	const classes = props.classes;
	return (
		<AppBar position="relative">
			<Toolbar>
				<Warning className={classes.icon} />
				<Typography variant="h6" color="inherit" noWrap>
					Error!
				</Typography>
			</Toolbar>
		</AppBar>
	);
}
