import React from 'react';
import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';

const ArticleList = ({ articles, pageSize, pageNumber }) => {
	let start = (pageNumber - 1) * pageSize;
	let end = Math.min(pageNumber * pageSize, articles.length);
	return (
		<div className="article-list">
			{articles.slice(start, end)
				.map((article) => (
				<ArticleCard key={article.id} {...article}/>
				)
			)}
		</div>
	);
}

ArticleList.defaultProps = {
	articles: [],
	pageNumber: 1,
	pageSize: 1,
};

ArticleList.propTypes = {
	articles: PropTypes.array,
	pageNumber: PropTypes.number,
	pageSize: PropTypes.number,
};

export default ArticleList;