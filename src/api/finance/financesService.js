const Finances = require('./finances');
const errorHandler = require('../common/errorHandler');

Finances.methods(['get', 'post', 'put', 'delete']);
Finances.updateOptions({ new: true, runValidators: true });
Finances.after('post', errorHandler).after('put', errorHandler);

module.exports = Finances;
