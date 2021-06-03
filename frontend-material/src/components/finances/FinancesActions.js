import axios from 'axios';

import { API_URL } from '../../util/Constants';

export async function create(listActivities, onResultShow) {
	const requests = [];
	for (const activity of listActivities) {
		requests.push(axios.post(`${API_URL}/finances/`, activity));
	}

	return axios
		.all(requests)
		.then((...allResponses) => allResponses[0].length)
		.then(totalActivities => onResultShow(totalActivities))
		.catch(e => {
			console.log(e);
		});
}

export async function retrieve(params, onMountRowsActivities) {
	axios
		.get(`${API_URL}/finances/`, {
			params: params,
		})
		.then(resp => resp.data)
		.then(activities => onMountRowsActivities(activities))
		.catch(e => {
			console.log(e);
		});
}

export function init(responses) {
	console.log('init');
	return 'ok';
}
