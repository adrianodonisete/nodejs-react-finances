import { makeStyles } from '@material-ui/core/styles';

const useStylesListActivities = makeStyles(theme => ({
	root: {
		display: 'inline-block',
		minWidth: 275,
		width: '25%',
		marginBottom: 15,
		marginRight: '2%',
	},
	green: {
		color: '#155724',
		backgroundColor: '#d4edda',
		borderColor: '#c3e6cb',
	},
	red: { color: '#721c24', backgroundColor: '#f8d7da', borderColor: '#f5c6cb' },
	blue: { color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff' },
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	totalNumber: {
		fontSize: 16,
	},
	pos: {
		marginBottom: 12,
	},
}));

export default useStylesListActivities;
