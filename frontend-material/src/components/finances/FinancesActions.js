import axios from 'axios';

const API_URL = 'http://localhost:3003/v2';
// const OAPI_URL = 'http://localhost:3003/oapi';

export async function create(listActivities) {
	const requests = [];
	for (const activity of listActivities) {
		requests.push(axios.post(`${API_URL}/finances/`, activity));
	}

	console.log(2, 'ini2');

	const successExec = await axios
		.all(requests)
		.then((...responses) => {
			responses.map(resp => console.log(resp));
			return true;
		})
		.catch(e => {
			console.log(e);
			return false;
		});

	console.log(3, successExec, successExec ? 'end3' : 'ini3');

	return await retCreate(successExec);
}

async function retCreate(exec) {
	console.log(exec);

	return {
		items: [],
		total: 0,
		optionShow: 'ini',
		success: false,
	};
}

export function init(responses) {
	console.log(responses);
	console.log('ok');
	return 'ok';
}
