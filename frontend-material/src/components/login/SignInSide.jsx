import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Copyright from '../layouts/Copyright';
import useStylesSignInSide from '../styles/useStylesSignInSide';

const useStyles = useStylesSignInSide;

//https://material-ui.com/components/text-fields/
export default function SignInSide() {
	const classes = useStyles();

	const loginHandler = (event, authData) => {
		event.preventDefault();
		this.setState({ authLoading: true });
		fetch('http://localhost:8080/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: authData.email,
				password: authData.password,
			}),
		})
			.then(res => {
				if (res.status === 422) {
					throw new Error('Validation failed.');
				}
				if (res.status !== 200 && res.status !== 201) {
					console.log('Error!');
					throw new Error('Could not authenticate you!');
				}
				return res.json();
			})
			.then(resData => {
				console.log(resData);
				this.setState({
					isAuth: true,
					token: resData.token,
					authLoading: false,
					userId: resData.userId,
				});
				localStorage.setItem('token', resData.token);
				localStorage.setItem('userId', resData.userId);
				const remainingMilliseconds = 60 * 60 * 1000;
				const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
				localStorage.setItem('expiryDate', expiryDate.toISOString());
				this.setAutoLogout(remainingMilliseconds);
			})
			.catch(err => {
				console.log(err);
				this.setState({
					isAuth: false,
					authLoading: false,
					error: err,
				});
			});
	};

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form
						className={classes.form}
						noValidate
						onSubmit={e =>
							loginHandler(e, {
								email: this.state.loginForm.email.value,
								password: this.state.loginForm.password.value,
							})
						}
					>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="username"
							label="Username"
							name="username"
							autoComplete="username"
							autoFocus
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
						<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
							Sign In
						</Button>
						<Grid container>
							{/* <Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid> */}
							<Grid item>
								<Link component={RouterLink} to="/create-account" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}
