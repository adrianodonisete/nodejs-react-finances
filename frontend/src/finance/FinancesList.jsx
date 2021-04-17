import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, arrayInsert, arrayRemove } from 'redux-form';

import Input from '../common/form/Input';
import InputDate from '../common/form/InputDate';
import Grid from '../common/layout/Grid';
import { FINANCES_FIELDS_OPERATIONS, FINANCES_FORM } from '../common/constants';

class FinanceList extends Component {
	add(index, item = {}) {
		if (!this.props.readOnly) {
			this.props.arrayInsert(FINANCES_FORM, FINANCES_FIELDS_OPERATIONS, index, item);
		}
	}

	remove(index) {
		if (!this.props.readOnly && this.props.list.length > 1) {
			this.props.arrayRemove(FINANCES_FORM, FINANCES_FIELDS_OPERATIONS, index);
		}
	}

	renderRows() {
		const list = this.props.list.length === 0 ? [{}] : this.props.list;
		return list.map((item, index) => (
			<tr key={index}>
				<td>
					<Field
						name={`${FINANCES_FIELDS_OPERATIONS}[${index}].option`}
						component={Input}
						placeholder="Opção IN/OUT"
						readOnly={this.props.readOnly}
					/>
				</td>
				<td>
					<Field
						name={`${FINANCES_FIELDS_OPERATIONS}[${index}].dateEvent`}
						component={InputDate}
						readOnly={this.props.readOnly}
					/>
				</td>
				<td>
					<Field
						name={`${FINANCES_FIELDS_OPERATIONS}[${index}].value`}
						component={Input}
						placeholder="Valor da operação"
						readOnly={this.props.readOnly}
					/>
				</td>
				<td>
					<Field
						name={`${FINANCES_FIELDS_OPERATIONS}[${index}].description`}
						component={Input}
						placeholder="Descrição da operação"
						readOnly={this.props.readOnly}
					/>
				</td>
				<td>
					<Field
						name={`${FINANCES_FIELDS_OPERATIONS}[${index}].category`}
						component={Input}
						placeholder="Categoria da operação"
						readOnly={this.props.readOnly}
					/>
				</td>

				<td>
					<button type="button" className="btn btn-success" onClick={() => this.add(index + 1)}>
						<i className="fa fa-plus"></i>
					</button>

					<button type="button" className="btn btn-warning" onClick={() => this.add(index + 1, item)}>
						<i className="fa fa-clone"></i>
					</button>

					<button type="button" className="btn btn-danger" onClick={() => this.remove(index)}>
						<i className="fa fa-trash-o"></i>
					</button>
				</td>
			</tr>
		));
	}

	render() {
		return (
			<Grid cols={this.props.cols}>
				<fieldset>
					<legend>Operações de Entrada e Saída</legend>
					<table className="table">
						<thead>
							<tr>
								<th>Entrada/Saída</th>
								<th>Data</th>
								<th>Valor</th>
								<th>Descrição</th>
								<th>Categoria</th>
								<th>Ações</th>
							</tr>
						</thead>
						<tbody>{this.renderRows()}</tbody>
					</table>
				</fieldset>
			</Grid>
		);
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch);
export default connect(null, mapDispatchToProps)(FinanceList);
