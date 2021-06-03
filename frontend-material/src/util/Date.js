const Date = {
	formatDateBrToISO: dateBr => {
		if (dateBr.includes('/')) {
			const aux = dateBr.split('/');
			return `${aux[2]}-${aux[1]}-${aux[0]} 10:10:10`;
		}
		return dateBr;
	},
	getFormatNumber: number => {
		const value = parseInt(number).toString();
		if (value.length === 1) {
			return `0${value}`;
		} else {
			return value;
		}
	},
	formatDateToDayMonthYear: isoDate => {
		const dateEvent = new window.Date(isoDate);
		return (
			Date.getFormatNumber(dateEvent.getDate()) +
			'/' +
			Date.getFormatNumber(dateEvent.getMonth() + 1) +
			'/' +
			dateEvent.getFullYear()
		);
	},
};

export default Date;
