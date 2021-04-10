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

import { init, create, update, destroy } from './BillingCycleActions';
import BillingCycleList from './BillingCycleList';
import BillingCycleForm from './BillingCycleForm';
import { TAB_CREATE, TAB_DELETE, TAB_LIST, TAB_UPDATE } from '../common/constants';

class BillingCycle extends Component {
	componentWillMount() {
		this.props.init();
	}

	render() {
		console.log('BillingCycle', this.props);
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
								<BillingCycleForm
									onSubmit={this.props.create}
									submitClass="primary"
									submitLabel="Incluir"
								/>
							</TabContentChild>

							<TabContentChild id={TAB_UPDATE}>
								<BillingCycleForm
									onSubmit={this.props.update}
									submitClass="info"
									submitLabel="Alterar"
								/>
							</TabContentChild>

							<TabContentChild id={TAB_DELETE}>
								<BillingCycleForm
									onSubmit={this.props.destroy}
									submitClass="danger"
									submitLabel="Deletar"
									readOnly={true}
								/>
							</TabContentChild>
						</TabsContent>
					</Tabs>
				</Content>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ init, create, update, destroy }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);
