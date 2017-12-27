import {combineReducers} from 'redux';
import * as types from '../actionTypes';

const INITIAL_STATE = {
	isFetchingArticles: false,
	articles: [],
	pageNumber: 1,
	pageSize: 5,
};

function articles(state = INITIAL_STATE, action) {
	const actionType = action.type;
	switch (actionType) {

		case types.GET_ARTICLES_REQUEST:
			return {
				...state,
				isFetchingArticles: true,
			};

		case types.GET_ARTICLES_SUCCESS:
			return {
				...state,
				isFetchingArticles: false,
				articles: action.payload.articles
			};

		case types.GET_ARTICLES_ERROR:
			return {...state};

		case types.SET_PAGE_NUMBER:
			return {
				...state,
				pageNumber: action.payload.pageNumber,
			};

		default:
			return state;
	}
}

export default combineReducers({
	articles,
})