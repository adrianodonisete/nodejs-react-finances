import Date from './Date';

const FormatContent = {
	formatTextSheet: text => {
		if (text.includes(`\t`)) {
			return text.replaceAll(`\t`, ';');
		}
		return text;
	},
	textSheetToArray: text => {
		text = FormatContent.formatTextSheet(text);
		const lines = text.split(`\n`);
		return lines.map(row => FormatContent.rowToActivity(row));
	},
	rowToActivity: row => {
		const arr = row.split(';');
		const value = FormatContent.valueToFloat(arr[2]);
		return {
			option: FormatContent.setOption(arr[0], value),
			dateEvent: Date.formatDateBrToISO(arr[1]),
			value: FormatContent.setValue(value),
			description: FormatContent.setDescription(arr[3]),
			category: FormatContent.setCategory(arr[4]),
		};
	},
	valueToFloat: value => {
		return parseFloat(value.replaceAll(',', '.').replaceAll(/r|\$/gim, '').trim());
	},
	setValue: value => {
		return parseFloat(Math.abs(value)).toFixed(2);
	},
	setOption: (option, value) => {
		option = option.replaceAll(/í|Í/gim, 'i').toLowerCase().trim();
		if (['entry', 'debit'].includes(option)) {
			return option;
		} else if (option === 'entrada') {
			return 'entry';
		} else if (option === 'saida') {
			return 'debit';
		} else if (value < 0.0) {
			return 'debit';
		}
		return 'entry';
	},
	setDescription: description => {
		return description
			.replaceAll('*', ' ')
			.replaceAll(/[ ]{2}/gim, ' ')
			.toLowerCase()
			.trim();
	},
	setCategory: category => {
		return category.toLowerCase().trim();
	},
};

export default FormatContent;
