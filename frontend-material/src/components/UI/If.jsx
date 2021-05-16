import React from 'react';

const If = props => {
	if (!props.show) return '';
	return <React.Fragment>{props.children}</React.Fragment>;
};

export default If;
