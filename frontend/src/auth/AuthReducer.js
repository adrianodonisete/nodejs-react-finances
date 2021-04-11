import { TOKEN_VALIDATED, USER_FETCHED, USER_KEY_LOCAL_STORAGE } from '../common/constants';

const INITIAL_STATE = {
	user: JSON.parse(localStorage.getItem(USER_KEY_LOCAL_STORAGE)),
	validToken: false,
};

function AuthReducer(state = INITIAL_STATE, action = null) {
	switch (action.type) {
		case TOKEN_VALIDATED:
			if (action.payload) {
				return { ...state, validToken: true };
			} else {
				localStorage.removeItem(USER_KEY_LOCAL_STORAGE);
				return { ...state, validToken: false, user: null };
			}
		case USER_FETCHED:
			localStorage.setItem(USER_KEY_LOCAL_STORAGE, JSON.stringify(action.payload));
			return { ...state, user: action.payload, validToken: true };
		default:
			return state;
	}
}

export default AuthReducer;
