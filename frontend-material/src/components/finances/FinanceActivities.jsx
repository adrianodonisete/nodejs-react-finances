import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../dashboard/Title';
import { Grid } from '@material-ui/core';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
	return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
	createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
	createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
	createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
	createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
	createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function getTitle(props) {
	return props.option === 'expenses' ? 'Despesas' : 'Recebidos';
}

export default function FinanceActivities(props) {
	return (
		<React.Fragment>
			<Grid>
				<Title>{getTitle(props)}</Title>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell>Categoria</TableCell>
							<TableCell>Data</TableCell>
							<TableCell>Descrição</TableCell>
							<TableCell>Pago para</TableCell>
							<TableCell align="right">Valor</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => (
							<TableRow key={row.id}>
								<TableCell>{row.paymentMethod}</TableCell>
								<TableCell>{row.date}</TableCell>
								<TableCell>{row.name}</TableCell>
								<TableCell>{row.shipTo}</TableCell>
								<TableCell align="right">{`$${row.amount}`}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Grid>
		</React.Fragment>
	);
}
