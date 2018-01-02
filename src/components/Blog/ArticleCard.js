import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

const dateFormat = time => (/(.*)T/g.exec(time)[1]);

const ArticleCard = (article) => {
	const { number, title, body, created_at, labels } = article;
	return (
		<div className="article-item">
			<div className="article-item-title">
				<Link to={`/article/${number}`}>{title}</Link>
			</div>
			<div className="article-item-time">
				<Icon type="calendar" /> {dateFormat(created_at)}
			</div>
			<div className="article-item-label">
				<Icon type="bars" />
				{labels.map((label) => (
					<span key={label.id}>
						<Icon type="tag-o" />{label.name}
					</span>
				))}
			</div>
			<div className="article-item-desc">
				<p>
					{body.split('----')[0]}
					<br/>
					<Link to={`/article/${number}`}>Learn more...</Link>
				</p>
			</div>
		</div>
	);
};

ArticleCard.DefaultProps = {
	
};

export default ArticleCard;