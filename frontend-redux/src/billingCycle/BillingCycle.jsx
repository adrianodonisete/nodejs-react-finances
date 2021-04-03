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
import { create } from './BillingCycleActions';
import BillingCycleList from './BillingCycleList';
import BillingCycleForm from './BillingCycleForm';
import { TAB_CREATE, TAB_DELETE, TAB_LIST, TAB_UPDATE } from '../common/constants';

class BillingCycle extends Component {
	componentWillMount() {
		this.props.selectTab(TAB_LIST);
		this.props.showTabs(TAB_LIST, TAB_CREATE);
	}
	render() {
		return (
			<div className="teste">
				<ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
				<Content>
					<Tabs>
						<TabsHeader>
							<TabHeaderChild label="Listar" icon="bars" target={TAB_LIST} />
							<TabHeaderChild label="Incluir" icon="plus" target={TAB_CREATE} />
							<TabHeaderChild label="Alterar" icon="pencil" target={TAB_UPDATE} />
							<TabHeaderChild label="Excluir" icon="trash-o" target={TAB_DELETE} />
						</TabsHeader>

						<TabsContent>
							<TabContentChild id={TAB_LIST}>
								<BillingCycleList />
							</TabContentChild>

							<TabContentChild id={TAB_CREATE}>
								<BillingCycleForm onSubmit={this.props.create} />
							</TabContentChild>

							<TabContentChild id={TAB_UPDATE}>
								<h1>Alterar</h1>
							</TabContentChild>

							<TabContentChild id={TAB_DELETE}>
								<h1>Excluir</h1>
							</TabContentChild>
						</TabsContent>
					</Tabs>
				</Content>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs, create }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);
