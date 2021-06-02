import axios from 'axios';

import { API_URL } from '../../util/Constants';

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
				console.log('testes 111');
				console.log(resp[0].data);
				return resp[0].data;
			});
			return totalActivities;
		})
		.then(totalActivities => onResultShow(totalActivities))
		.catch(e => {
			console.log('error 111');
			console.log(e);
		});
}

export async function retrieve(params, onMountRowsActivities) {
	axios
		.get(`${API_URL}/finances/`, {
			params: params,
		})
		.then(resp => {
			console.log('testes 333');
			console.log(resp.data);
			return resp.data;
		})
		.then(activities => onMountRowsActivities(activities))
		.catch(e => {
			console.log('error 333');
			console.log(e);
		});
}

export function init(responses) {
	console.log(responses);
	console.log('ok');
	return 'ok';
}
