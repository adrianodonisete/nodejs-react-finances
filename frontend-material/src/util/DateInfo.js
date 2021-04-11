const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

function getMonthName(month = -1) {
	if (month >= 0 && month <= 11) {
		return monthNames[month];
	}

	const m = new Date().getMonth();
	return monthNames[m];
}

function dateInfo() {
	return `on ${new Date().getDate()} ${getMonthName()}, ${new Date().getFullYear()}`;
}

export default dateInfo;
