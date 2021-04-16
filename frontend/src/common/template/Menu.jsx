import React from 'react';
import MenuItem from './MenuItem';
import MenuTree from './MenuTree';

function Menu() {
	return (
		<ul className="sidebar-menu">
			<MenuItem path="/" label="Dashboard" icon="dashboard" />
			<MenuItem path="/finances" label="Minhas Finanças" icon="money" />
			<MenuItem path="billingCycles" label="Ciclo de pagamentos" icon="usd" />
			{/* <MenuTree label="Cadastro" icon="edit"></MenuTree> */}
		</ul>
	);
}

export default Menu;
