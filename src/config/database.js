const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dotenv = require('dotenv');
dotenv.config();

const DB_URL = process.env.URL_MONGO;

console.log(DB_URL);

module.exports = mongoose
	.connect(DB_URL, {
		useNewUrlParser: true,
		// useUnifiedTopology: true,
		auth: { authSource: 'admin' },
	})
	.catch(e => console.log('error', e));

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'.";
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'.";
