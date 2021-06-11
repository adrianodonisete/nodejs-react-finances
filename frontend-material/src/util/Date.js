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
	getLastMonths: () => {
		const formatter = new Intl.DateTimeFormat('pt-BR', { month: 'short' });
		const months = [];
		const today = new window.Date();

		let loops = 0;
		let operator = 0;
		while (loops < 12) {
			const month = new window.Date(today.getFullYear(), today.getMonth() + operator, 1);
			const name =
				formatter.format(month).toString().replace('.', '') + '/' + month.getFullYear().toString().substring(2);
			months.push({
				text: name.toUpperCase(),
				date: month.toISOString(),
			});
			loops++;
			operator--;
		}
		return months;
	},
	getFirstAndLastDayOfMonth: (month = null) => {
		let date = new window.Date();
		if (month) {
			date = new window.Date(month);
		}
		const firstDayOfMonth = new window.Date(date.getFullYear(), date.getMonth(), 1);
		const lastDayOfMonth = new window.Date(date.getFullYear(), date.getMonth() + 1, 0);
		return {
			firstDayOfMonth,
			lastDayOfMonth,
		};
	},
};

export default Date;
