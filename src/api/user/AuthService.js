const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./user');

const dotenv = require('dotenv');
dotenv.config();

const authSecret = process.env.AUTH_SECRET;

const emailRegex = /\S+@\S+\.\S+/;
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[@#$%]).{8,15})/; //(?=.*[A-Z])

const sendErrorsFromDB = (res, dbErrors) => {
	console.log(dbErrors);
	const errors = [];
	_.forIn(dbErrors.errors, error => errors.push(error.message));
	return res.status(400).json({ errors });
};

const login = (req, res, next) => {
	const email = req.body.email || '';
	const password = req.body.password || '';

	User.findOne({ email }, (err, user) => {
		if (err) {
			return sendErrorsFromDB(res, err);
		} else if (user && bcrypt.compareSync(password, user.password)) {
			const token = jwt.sign({ ...user }, authSecret, {
				expiresIn: '7 day',
			});

			res.json({ name: user.name, email: user.email, token, expiresIn: '7 days' });
		} else {
			return res.status(400).send({ errors: ['Usuário/Senha inválidos'] });
		}
	});
};

const validateToken = (req, res, next) => {
	const token = req.body.token || '';
	jwt.verify(token, authSecret, function (err, decoded) {
		return res.status(200).send({ valid: !err });
	});
};

const signup = (req, res, next) => {
	const name = req.body.name || '';
	const email = req.body.email || '';
	const password = req.body.password || '';
	const confirmPassword = req.body.confirm_password || '';

	if (!email.match(emailRegex)) {
		return res.status(400).send({ errors: ['O e-mail informa está inválido'] });
	}

	if (!password.match(passwordRegex)) {
		return res.status(400).send({
			errors: [
				'Senha precisa ter: uma letra maiúscula, ' +
					' um número, uma caractere especial(@#$%) e tamanho entre 8-15.',
			],
		});
	}

	const salt = bcrypt.genSaltSync();
	const passwordHash = bcrypt.hashSync(password, salt);
	if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
		return res.status(400).send({ errors: ['Senhas não conferem.'] });
	}

	User.findOne({ email }, (err, user) => {
		if (err) {
			return sendErrorsFromDB(res, err);
		} else if (user) {
			return res.status(400).send({ errors: ['Usuário já cadastrado.'] });
		} else {
			const newUser = new User({ name, email, password: passwordHash });
			newUser.save(e => {
				if (e) {
					return sendErrorsFromDB(res, e);
				} else {
					login(req, res, next);
				}
			});
		}
	});
};

module.exports = { login, signup, validateToken };
