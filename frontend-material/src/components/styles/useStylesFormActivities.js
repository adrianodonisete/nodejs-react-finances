import { makeStyles } from '@material-ui/core/styles';

const useStylesFormActivities = makeStyles(theme => ({
	textarea: {
		width: '100%',
	},
	marginButton: {
		margin: theme.spacing(1),
	},
	extendedIcon: {
		marginRight: theme.spacing(1),
	},
	formContent: {
		width: '100%',
	},
	small: {
		fontSize: '0.65em',
	},
}));

export default useStylesFormActivities;
