import React, { useState } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Route, Switch } from 'react-router';

import useStylesDefault from '../styles/useStylesDefault';
import { mainListItems, secondaryListItems } from './listItems';
import Copyright from './Copyright';
import Dashboard from '../dashboard/Dashboard';
import FinanceActivities from '../finances/FinanceActivities';
import Error404 from '../errors/Error404';
import TopBarTitle from './TopBarTitle';

const useStyles = useStylesDefault;

export default function PagesRoute() {
	const classes = useStyles();
	const [open, setOpen] = useState(true);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
				<Toolbar className={classes.toolbar}>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
					>
						<MenuIcon />
					</IconButton>

					<TopBarTitle classes={classes} />

					<IconButton color="inherit">
						<Badge badgeContent={4} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>

			<Drawer
				variant="permanent"
				classes={{
					paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
				}}
				open={open}
			>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>{mainListItems}</List>
				<Divider />
				<List>{secondaryListItems}</List>
			</Drawer>

			<Box
				component="main"
				sx={{
					backgroundColor: theme =>
						theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
					flexGrow: 1,
					height: '100vh',
					overflow: 'auto',
				}}
				style={{ width: 'calc(120vh + 50px)' }}
			>
				<div className={classes.appBarSpacer} />
				<Container maxWidth="lg" className={classes.container}>
					<Switch>
						<Route exact path={['/', '/pages', '/pages/dashboard']}>
							<Dashboard useClasses={classes} />
						</Route>
						<Route key="expenses" exact path="/pages/expenses">
							<FinanceActivities useClasses={classes} option="expenses" />
						</Route>
						<Route key="received" exact path="/pages/received">
							<FinanceActivities useClasses={classes} option="received" />
						</Route>
						<Route path="*">
							<Error404 topBar={false} linkDasboard={false} />
						</Route>
					</Switch>

					<Box pt={4}>
						<Copyright />
					</Box>
				</Container>
			</Box>
		</div>
	);
}

// border: '3px green solid',
