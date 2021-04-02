import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentHeader from '../common/template/ContentHeader';
import Content from '../common/template/Content';
import Tabs from '../common/tab/Tabs';
import TabsHeader from '../common/tab/TabsHeader';
import TabsContent from '../common/tab/TabsContent';
import TabHeaderChild from '../common/tab/TabHeaderChild';
import TabContentChild from '../common/tab/TabContentChild';

import { selectTab, showTabs } from '../common/tab/TabActions';
import BillingCycleList from './BillingCycleList';

class BillingCycle extends Component {
	componentWillMount() {
		this.props.selectTab('tabList');
		this.props.showTabs('tabList', 'tabCreate', 'tabDelete');
	}
	render() {
		return (
			<div className="teste">
				<ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
				<Content>
					<Tabs>
						<TabsHeader>
							<TabHeaderChild label="Listar" icon="bars" target="tabList" />
							<TabHeaderChild label="Incluir" icon="plus" target="tabCreate" />
							<TabHeaderChild label="Alterar" icon="pencil" target="tabUpdate" />
							<TabHeaderChild label="Excluir" icon="trash-o" target="tabDelete" />
						</TabsHeader>

						<TabsContent>
							<TabContentChild id="tabList">
								<BillingCycleList />
							</TabContentChild>
							<TabContentChild id="tabCreate">
								<h1>Incluir</h1>
							</TabContentChild>
							<TabContentChild id="tabUpdate">
								<h1>Alterar</h1>
							</TabContentChild>
							<TabContentChild id="tabDelete">
								<h1>Excluir</h1>
							</TabContentChild>
						</TabsContent>
					</Tabs>
				</Content>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);
