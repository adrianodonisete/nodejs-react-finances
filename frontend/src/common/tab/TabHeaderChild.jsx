import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import If from '../operator/If';

import { selectTab } from './TabActions';

class TabHeaderChild extends Component {
	render() {
		const selected = this.props.tab.selected === this.props.target;
		const visible = this.props.tab.visible[this.props.target];
		return (
			<If test={visible}>
				<li className={selected ? 'active' : ''}>
					<Link
						to="#"
						data-toggle="tab"
						data-target={this.props.target}
						onClick={() => this.props.selectTab(this.props.target)}
					>
						<i className={`fa fa-${this.props.icon}`}></i>
						{this.props.label}
					</Link>
				</li>
			</If>
		);
	}
}

const mapStateToProps = state => ({ tab: state.tab });
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabHeaderChild);
