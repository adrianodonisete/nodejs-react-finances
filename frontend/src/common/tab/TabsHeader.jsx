import React from 'react';

function TabsHeader(props) {
	return <ul className="nav nav-tabs">{props.children}</ul>;
}

export default TabsHeader;
