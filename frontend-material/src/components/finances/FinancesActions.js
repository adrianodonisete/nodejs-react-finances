import axios from 'axios';

const API_URL = 'http://localhost:3003/v2';
// const OAPI_URL = 'http://localhost:3003/oapi';

export async function create(listActivities, onResultShow) {
	const requests = [];
	for (const activity of listActivities) {
		requests.push(axios.post(`${API_URL}/finances/`, activity));
	}

	console.log(2, 'ini2');

	return axios
		.all(requests)
		.then((...allResponses) => {
			const totalActivities = allResponses[0].length;
			allResponses.map(resp => {
				console.log('testes 11');
				console.log(resp[0].data);
				return resp[0].data;
			});
			return totalActivities;
		})
		.then(totalActivities => onResultShow(totalActivities))
		.catch(e => {
			console.log('error 222');
			console.log(e);
		});
}

export function retrieve(filters, onResultShow) {
	axios
		.get(`${API_URL}/finances/`, {})
		.then(resp => {
			console.log('testes 333');
			console.log(resp[0].data);
			return resp[0].data;
		})
		.catch(e => {
			console.log('error 444');
			console.log(e);
		});
}

export function init(responses) {
	console.log(responses);
	console.log('ok');
	return 'ok';
}
