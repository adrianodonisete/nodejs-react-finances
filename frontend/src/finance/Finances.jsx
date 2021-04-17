import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field } from 'redux-form';

import TabHeaderChild from '../common/tab/TabHeaderChild';
import TabsHeader from '../common/tab/TabsHeader';
import TabsContent from '../common/tab/TabsContent';
import Content from '../common/template/Content';
import ContentHeader from '../common/template/ContentHeader';
import TabContentChild from '../common/tab/TabContentChild';
import LabelAndInput from '../common/form/LabelAndInput';

import { init } from './FinancesActions';
import FinancesForm from './FinancesForm';

import {
	TAB_FIN_CAD_EVENTS_LIST,
	TAB_FIN_LIST_EVENTS,
	TAB_FIN_TEXT_AREA,
	TAB_FIN_EDIT_EVENTS,
} from '../common/constants';

class Finances extends Component {
	componentDidMount() {
		this.props.init();
	}

	render() {
		const handleSubmit = () => [];
		const readOnly = false;

		return (
			<div>
				<ContentHeader title="Minhas Finanças" small="Entrada e Saída" />
				<Content>
					<TabsHeader>
						<TabHeaderChild label="Listar Eventos" icon="bars" target={TAB_FIN_LIST_EVENTS} />
						<TabHeaderChild label="Cadastrar Eventos Lote" icon="plus" target={TAB_FIN_TEXT_AREA} />
						<TabHeaderChild
							label="Revisar e Cadastrar Lista Eventos"
							icon="plus"
							target={TAB_FIN_CAD_EVENTS_LIST}
						/>
						<TabHeaderChild label="Editar Eventos" icon="pencil" target={TAB_FIN_EDIT_EVENTS} />
					</TabsHeader>

					<TabsContent>
						<TabContentChild id={TAB_FIN_LIST_EVENTS}>
							<h2>Listar Eventos - Entrada e Saída</h2>
						</TabContentChild>

						<TabContentChild id={TAB_FIN_TEXT_AREA}>
							<form onSubmit={handleSubmit}>
								<div className="box-body">
									<textarea name="list_events" id="list_events" cols="30" rows="10"></textarea>

									<button
										type="button"
										className="btn btn-default"
										onClick={() => console.log('here')}
									>
										Cancelar
									</button>
								</div>
							</form>
						</TabContentChild>

						<TabContentChild id={TAB_FIN_CAD_EVENTS_LIST}>
							<FinancesForm onSubmit={this.props.update} submitClass="info" submitLabel="Alterar" />
						</TabContentChild>
					</TabsContent>
				</Content>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(Finances);
