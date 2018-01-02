import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import Comment from './Comment';

const Content = (article) => {
	const { number, title, created_at, body} = article;
	const commentUrl = `https://github.com/zzy1993/blog/issues/${number}`;
	return (
		<div className="archive-list-area">
			<div className="archive-list">
				<div className="title">
					<h>{title}</h>
				</div>
				<div className="time">
					{created_at.split('T')[0]}
				</div>
				<div className="detail" dangerouslySetInnerHTML={{ __html: marked(body || '') }} />
			</div>

			<Comment commentUrl={commentUrl}/>

		</div>
	);
};

Content.defaultProps = {
	number: 0,
	title: '',
	created_at: '',
	body: 'Loading...',
};

Content.propTypes = {
	number: PropTypes.number,
	title: PropTypes.string,
	created_at: PropTypes.string,
	body: PropTypes.string,
};

export default Content;