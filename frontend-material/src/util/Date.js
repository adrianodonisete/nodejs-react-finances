const Date = {
	formatDateBrToISO: dateBr => {
		if (dateBr.includes('/')) {
			const aux = dateBr.split('/');
			return `${aux[2]}-${aux[1]}-${aux[0]} 10:10:10`;
		}
		return dateBr;
	},
};

export default Date;
