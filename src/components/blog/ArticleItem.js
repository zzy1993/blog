import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

const dateFormat = time => (/(.*)T/g.exec(time)[1]);

export default class ArticleItem extends React.Component {

	render() {
		const labelList = [];
		const { number, title, body, created_at, category } = this.props.article;
		console.log(dateFormat(created_at));
		return (
			<div className="blog-article-item">
				<div className="blog-article-item-title">
					<Link to={`/blog/article/${number}`}>{title}</Link>
				</div>
				<div className="blog-article-item-time"><Icon type="calendar" /> {dateFormat(created_at)}</div>
				<div className="blog-article-item-label"><Icon type="bars" /> {category}<Icon type="tag-o" /> {labelList}</div>
				<div className="blog-article-item-desc">
					<p>
						{body.split('----')[0]}
						<br/>
						<Link to={`/blog/article/${number}`}>Learn more...</Link>
					</p>
				</div>
			</div>
		);
	}
}