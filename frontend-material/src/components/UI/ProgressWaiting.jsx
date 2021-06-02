import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';

const ProgressWaiting = () => {
	return (
		<React.Fragment>
			<Typography variant="h4" gutterBottom>
				<CircularProgress color="primary" />
			</Typography>
			<Typography variant="subtitle2" gutterBottom>
				Processando, aguarde...
			</Typography>
		</React.Fragment>
	);
};

export default ProgressWaiting;
