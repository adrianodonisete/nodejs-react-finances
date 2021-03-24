import * as React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import DateInfo from '../../util/DateInfo';

function preventDefault(event) {
	event.preventDefault();
}

export default function Deposits() {
	return (
		<React.Fragment>
			<Title>Last accounts</Title>
			<Typography component="p" variant="h4">
				$3,024.00
			</Typography>
			<Typography color="textSecondary" sx={{ flex: 1 }}>
				{DateInfo()}
			</Typography>
			<div>
				<Link color="primary" href="#" onClick={preventDefault}>
					View balance
				</Link>
			</div>
		</React.Fragment>
	);
}
