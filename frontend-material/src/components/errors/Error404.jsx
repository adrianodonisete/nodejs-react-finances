import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStylesError404 from '../styles/useStylesError404';
import ErrorAppBar from './ErrorAppBar';
import ErrorButtonBack from './ErrorButtonBack';

const useStyles = useStylesError404;

export default function Error404(props) {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<ErrorAppBar classes={classes} topBar={props.topBar} />

			<main>
				<div className={classes.heroContent}>
					<Container maxWidth="sm">
						<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
							Error 404
						</Typography>
						<Typography variant="h5" align="center" color="textSecondary" paragraph>
							Page not found!
						</Typography>
					</Container>
					<ErrorButtonBack classes={classes} linkDasboard={props.linkDasboard} />
				</div>
			</main>
		</React.Fragment>
	);
}
