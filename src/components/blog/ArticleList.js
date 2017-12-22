import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import ArticleLabel from './ArticleLabel';
import './article.css';

export default class ArticleList extends React.Component {

	render() {
		const articlelist = [];
		const start = 0;
		const end = 3;
		for (let i = start; i < end; ++i) {
			let item = {};
			articlelist.push(
				<ArticleItem key={i}
				             number={item.number}
				             title={item.title}
				             labels={item.labels}
				             time={item.created_at}
				             desc={item.body}/>
			);
		}

		return (
			<div className="blog-article-list">
				{articlelist}
			</div>
		);
	}
}

ArticleList.defaultProps = {
	issues: null,
	pageNumber: 1,
	defaultPageSize: 1,
};

ArticleList.propTypes = {
	issues: PropTypes.array,
	pageNumber: PropTypes.number,
	defaultPageSize: PropTypes.number,
};

class ArticleItem extends React.Component {
	render() {
		const labelList = [];
		let time = 'time place holder';
		let category = 'category place holder';
		return (
			<div className="blog-article-item">
				<div className="blog-article-item-title">
					<Link to={`/blog/article/${this.props.number}`}>{this.props.title}</Link>
				</div>
				<div className="blog-article-item-time"><Icon type="calendar" /> {time}</div>
				<div className="blog-article-item-label"><Icon type="bars" /> {category}<Icon type="tag-o" /> {labelList}</div>
				<div className="blog-article-item-desc">
					<p>
						{/*this.props.desc.split('----')[0]*/}
						<span className="blog-article-item-desc-more"><Link to={`/blog/article/${this.props.number}`}>Learn more...</Link></span>
					</p>
				</div>
			</div>
		);
	}
}

// ArticleItem.defaultProps = {
// 	number: 'number',
// 	title: 'title',
// 	labels: 'label',
// 	time: 'time',
// 	desc: 'desc',
// };
//
// ArticleItem.propTypes = {
// 	number: PropTypes.number,
// 	title: PropTypes.string,
// 	labels: PropTypes.array,
// 	time: PropTypes.string,
// 	desc: PropTypes.string,
// };
