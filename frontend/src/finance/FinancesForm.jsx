import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { formValueSelector, reduxForm } from 'redux-form';

import { init } from './FinancesActions';
import { FINANCES_FORM } from '../common/constants';
import FinancesList from './FinancesList';

class FinancesForm extends Component {
	render() {
		const { handleSubmit, readOnly, credits, debts } = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<div className="box-body">
					<FinancesList cols="12" list={credits} readOnly={readOnly} />
				</div>
				<div className="box-footer">
					<button type="submit" className={`btn btn-${this.props.submitClass}`}>
						{this.props.submitLabel}
					</button>

					<button type="button" className="btn btn-default" onClick={this.props.init}>
						Cancelar
					</button>
				</div>
			</form>
		);
	}
}

const reduxFinancesForm = reduxForm({ form: FINANCES_FORM, destroyOnUnmount: false })(FinancesForm);
const selector = formValueSelector(FINANCES_FORM);

const mapStateToProps = state => ({
	credits: selector(state, 'credits'),
	debts: selector(state, 'debts'),
});
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(reduxFinancesForm);
