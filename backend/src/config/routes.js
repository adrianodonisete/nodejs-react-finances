const express = require('express');
const auth = require('./auth');

module.exports = function (server) {
	// * Rotas protegidas por Token JWT
	const protectedApi = express.Router();
	server.use('/api', protectedApi);

	protectedApi.use(auth);

	const BillingCycle = require('../api/billingCycle/billingCycleService');
	BillingCycle.register(protectedApi, '/billingCycles');

	// * Rotas abertas
	const openApi = express.Router();
	server.use('/oapi', openApi);

	const AuthService = require('../api/user/AuthService');
	openApi.post('/login', AuthService.login);
	openApi.post('/signup', AuthService.signup);
	openApi.post('/validateToken', AuthService.validateToken);

	//? finances rota aberta
	const router = express.Router();
	server.use('/v2', router);

	const Finances = require('../api/finance/financesService');
	Finances.register(router, '/finances');
};
