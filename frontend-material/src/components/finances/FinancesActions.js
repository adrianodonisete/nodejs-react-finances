import axios from 'axios';

const API_URL = 'http://localhost:3003/v2';
// const OAPI_URL = 'http://localhost:3003/oapi';

export function create(listActivities) {
	const requests = [];
	for (const activity of listActivities) {
		requests.push(axios.post(`${API_URL}/finances/`, activity));
	}

	axios
		.all(requests)
		.then((...responses) => {
			responses.map(resp => console.log(resp));
		})
		.catch(e => {
			console.log(e);
		});
}

export function init(responses) {
	console.log(responses);
	console.log('ok');
	return 'ok';
}

// e.response.data.errors.forEach(err => console.log(err));
