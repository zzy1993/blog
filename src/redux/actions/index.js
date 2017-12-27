import axios from 'axios';
import * as types from '../actionTypes';

// getArticle
const URL_GET_ARTICLES = 'https://api.github.com/repos/zzy1993/blog/issues';

export const getArticlesRequest = () => ({
	type: types.GET_ARTICLES_REQUEST,
});

export const getArticlesSuccess = (articles) => ({
	type: types.GET_ARTICLES_SUCCESS,
	payload: {
		articles
	},
});

export const getArticlesError = () => ({
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
		console.log(res);
		const articles = res.data.map(article => {
			return {
				id: article.id,
				number: article.number,
				title: article.title,
				created_at: article.created_at,
				body: article.body,
			};
		});
		dispatch(getArticlesSuccess(articles));
	});
};

// switchPage

export const setPageNumber = (pageNumber) => ({
	type: types.SET_PAGE_NUMBER,
	payload: {
		pageNumber: pageNumber,
	},
});

