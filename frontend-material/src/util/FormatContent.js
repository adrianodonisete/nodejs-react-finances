const FormatContent = {
	formatTextSheet: text => {
		if (text.includes(`\t`)) {
			return text.replaceAll(`\t`, ';');
		}
		return text;
	},
	textSheetToArray: text => {
		if (text.includes(`\t`)) {
			text = text.replaceAll(`\t`, ';');
		}
		const lines = text.split(`\n`);
		return lines.map(row => FormatContent.rowToActivity(row));
	},
	rowToActivity: row => {
		const arr = row.split(';');
		return {
			type: arr[0],
			dateEvent: arr[1],
			value: arr[2],
			description: arr[3],
			category: arr[4],
		};
	},
	setType: (type, value) => {
		type = type.toLower().trim();
		if (type === 'entry' || type === 'debit') {
			return type;
		} else if (value < 0) {
			return 'debit';
		}
		return 'entry';
	},
};

export default FormatContent;
