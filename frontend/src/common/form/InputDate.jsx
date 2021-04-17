import React from 'react';
import DatePicker from 'react-date-picker';

function InputDate(props) {
	console.log('init date', props.input, props.value, props.readOnly);
	return (
		<div>
			{/* <input
				{...props.input}
				type="date"
				format="dd-MM-yyyy"
				lang="pt-BR"
				className="form-control"
				placeholder={props.placeholder}
				readOnly={props.readOnly}
			/> */}

			<DatePicker
				dayPlaceholder="dd"
				monthPlaceholder="mm"
				yearPlaceholder="yyyy"
				locale="pt-BR"
				selected={props.value || new Date()}
				onChange={props.input.onChange}
				readOnly={props.readOnly}
			/>
		</div>
	);
}

export default InputDate;
