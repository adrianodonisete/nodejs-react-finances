import React from 'react';
import MenuItem from './MenuItem';
import MenuTree from './MenuTree';

function Menu() {
	return (
		<ul className="sidebar-menu">
			<MenuItem path="/" label="Dashboard" icon="dashboard" />
			<MenuItem path="/finances" label="Finances" icon="money" />
			<MenuTree label="Cadastro" icon="edit">
				<MenuItem path="billingCycles" label="Ciclo de pagamentos" icon="usd" />
			</MenuTree>
		</ul>
	);
}

export default Menu;
