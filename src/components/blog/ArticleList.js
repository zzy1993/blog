import React from 'react';
import PropTypes from 'prop-types';
import ArticleItem from './ArticleItem';
import ArticleLabel from './ArticleLabel';
import './article.css';

export default class ArticleList extends React.Component {

	render() {
		console.log("ArticleList", this.props);
		const { articles, pageSize, pageNumber } = this.props;
		let start = (pageNumber - 1) * pageSize;
		let end = Math.min(pageNumber * pageSize, articles.length);
		return (
			<div className="blog-article-list">
				{articles.slice(start, end)
					.map((article) => (
					<ArticleItem key={article.id} article={article}/>
					)
				)}
			</div>
		);
	}
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

