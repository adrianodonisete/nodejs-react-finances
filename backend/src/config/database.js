const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dotenv = require('dotenv');
dotenv.config();

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const ENVIROMENT = process.env.ENVIROMENT;

let DB_URL;
if (ENVIROMENT === 'dev') {
	DB_URL = `mongodb://${DB_HOST}/${DB_NAME}`;
} else {
	DB_URL = `mongodb+srv://${DB_HOST}/${DB_NAME}`;
}

module.exports = mongoose
	.connect(DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		user: DB_USER,
		pass: DB_PASS,
		auth: { authSource: 'admin' },
	})
	.catch(e => console.log(e));

// module.exports = mongoose.connect('mongodb://localhost/mymoney');

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'.";
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'.";
