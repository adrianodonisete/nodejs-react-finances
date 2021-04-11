import React from 'react';

function ContentHeader(props) {
	return (
		<section className="content-header">
			<h1>
				{props.title} <small>{props.label}</small>
			</h1>
		</section>
	);
}

export default ContentHeader;
