import {combineReducers} from 'redux';
import * as types from '../actionTypes';

const INITIAL_STATE = {
	isFetchingArticles: false,
	articles: [],
	isFetchingArticle: false,
	article: null,
	isFetchingTags: false,
	tags: [],
	isFetchingTag: false,
	tag: null,
	pageNumber: 1,
	pageSize: 5,
};

function blog(state = INITIAL_STATE, action) {
	const actionType = action.type;
	switch (actionType) {

		// articles

		case types.GET_ARTICLES_REQUEST:
			return {
				...state,
				isFetchingArticles: true,
			};

		case types.GET_ARTICLES_SUCCESS:
			return {
				...state,
				isFetchingArticles: false,
				articles: action.payload.articles,
			};

		case types.GET_ARTICLES_ERROR:
			return {
				...state,
				isFetchingArticles: false,
			};

		//article
		
		case types.GET_ARTICLE_REQUEST:
			return {
				...state,
				isFetchingArticle: true,
			};
		
		case types.GET_ARTICLE_SUCCESS:
			return {
				...state,
				isFetchingArticle: false,
				article: action.payload.article,
			};
		
		case types.GET_ARTICLE_ERROR:
			return {
				...state,
				isFetchingArticle: false,
			};


		//tags

		case types.GET_TAGS_REQUEST:
			return {
				...state,
				isFetchingTags: true,
			};

		case types.GET_TAGS_SUCCESS:
			return {
				...state,
				isFetchingTags: false,
				tags: action.payload.tags,
			};

		case types.GET_TAGS_ERROR:
			return {
				...state,
				isFetchingTags: false,
			};


		//tag

		case types.GET_TAG_REQUEST:
			return {
				...state,
				isFetchingTag: true,
			};

		case types.GET_TAG_SUCCESS:
			return {
				...state,
				isFetchingTag: false,
				tag: action.payload.tag,
			};

		case types.GET_TAG_ERROR:
			return {
				...state,
				isFetchingTag: false,
			};


		//page_number

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
	blog,
})