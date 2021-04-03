import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import 'toastr_css/react-redux-toastr.css';
import { TEN_SECONDS } from '../constants';

function Messages(props) {
	return (
		<ReduxToastr
			timeOut={TEN_SECONDS}
			newstOnTop={false}
			preventDuplicates={true}
			position="top-right"
			transitionIn="fadeIn"
			transitionOut="fadeOut"
			progressBar
		/>
	);
}

export default Messages;
