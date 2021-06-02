const Date = {
	formatDateBrToISO: dateBr => {
		if (dateBr.includes('/')) {
			const aux = dateBr.split('/');
			return `${aux[2]}-${aux[1]}-${aux[0]} 10:10:10`;
		}
		return dateBr;
	},
	formatDateToDayMonthYear: isoDate => {
		const dateEvent = new window.Date(isoDate);
		return dateEvent.getDate() + '/' + parseInt(dateEvent.getMonth() + 1) + '/' + dateEvent.getFullYear();
	},
};

export default Date;
