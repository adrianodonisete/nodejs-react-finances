import axios from 'axios';

const API_URL = 'http://localhost:3003/api';
const OAPI_URL = 'http://localhost:3003/oapi';

export function create(values) {
	return dispatch => {
		axios['post'](`${API_URL}/billingCycles/`, values)
			.then(resp => {
				dispatch(init());
			})
			.catch(e => {
				e.response.data.errors.forEach(err => console.log(err));
			});
	};
}

export function init() {
	return 'ok';
}
