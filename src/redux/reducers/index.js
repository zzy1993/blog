import { REQUEST_ISSUES } from '../actionTypes';

const INITIAL_STATE = {
	
};

export default function(state = INITIAL_STATE, action) {
	const actionType = action.type;
	switch (actionType) {
		case REQUEST_ISSUES:
			return {...state};
		default:
			return state;
	}
}
