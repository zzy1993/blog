import axios from 'axios';
import * as types from '../actionTypes';



// getArticles

const URL_GET_ARTICLES = 'https://api.github.com/repos/zzy1993/blog/issues';

const getArticlesRequest = () => ({
	type: types.GET_ARTICLES_REQUEST,
});

const getArticlesSuccess = (articles) => ({
	type: types.GET_ARTICLES_SUCCESS,
	payload: {
		articles
	},
});

const getArticlesError = () => ({
	type: types.GET_ARTICLES_ERROR,
});

export const getArticles = (pageSize, pageNumber) => dispatch => {
	dispatch(getArticlesRequest());
	return axios.get( URL_GET_ARTICLES , {
		params: {
			// per_page: pageSize,
			// page: pageNumber,
		}
	}).then( res =>{
		dispatch(getArticlesSuccess(res.data));
	});
};



// getArticle

const URL_GET_ARTICLE = 'https://api.github.com/repos/zzy1993/blog/issues/';

const getArticleRequest = () => ({
	type: types.GET_ARTICLE_REQUEST,
});

const getArticleSuccess = (article) => ({
	type: types.GET_ARTICLE_SUCCESS,
	payload: {
		article
	},
});

const getArticleError = () => ({
	type: types.GET_ARTICLE_ERROR,
});

export const getArticle = (id) => dispatch => {
	console.log('getArticle');
	dispatch(getArticleRequest());
	return axios.get( URL_GET_ARTICLE + id , {
		params: {
			// per_page: pageSize,
			// page: pageNumber,
		}
	}).then( res =>{
		dispatch(getArticleSuccess(res.data));
	});
};


// getTags

const URL_GET_TAGS = 'https://api.github.com/repos/zzy1993/blog/labels';

const getTagsRequest = () => ({
	type: types.GET_TAGS_REQUEST,
});

const getTagsSuccess = (tags) => ({
	type: types.GET_TAGS_SUCCESS,
	payload: {
		tags,
	}
});

const getTagsError = () => ({
	type: types.GET_TAGS_ERROR,
});

export const getTags = () => dispatch => {
	dispatch(getTagsRequest());
	axios.get(URL_GET_TAGS, {
		params:{

		}
	}).then( res => {
		dispatch(getTagsSuccess(res.data));
	});
};

// getTag

const URL_GET_TAG = 'https://api.github.com/repos/zzy1993/blog/labels/';

const getTagRequest = () => ({
	type: types.GET_TAG_REQUEST,
});

const getTagSuccess = (tags) => ({
	type: types.GET_TAG_SUCCESS,
	payload: {
		tags,
	}
});

const getTagError = () => ({
	type: types.GET_TAG_ERROR,
});

export const getTag = (tagName) => dispatch => {
	dispatch(getTagRequest());
	axios.get(URL_GET_TAG + tagName, {
		params:{

		}
	}).then( res => {
		dispatch(getTagSuccess(res.data));
	});
};

// switchPage

export const setPageNumber = (pageNumber) => ({
	type: types.SET_PAGE_NUMBER,
	payload: {
		pageNumber: pageNumber,
	},
});

