import React from 'react';

function Input(props) {
	return (
		<input
			{...props.input}
			type={props.type}
			className="form-control"
			placeholder={props.placeholder}
			readOnly={props.readOnly}
		/>
	);
}

export default Input;
