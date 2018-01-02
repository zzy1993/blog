import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => (
	<div className="comment-box">
		<a target="_blank" rel="noopener noreferrer" href={props.commentUrl}>Click and Comment</a>
	</div>
);

Comment.defaultProps = {
	commentUrl: 'commentUrl',
};

Comment.propTypes = {
	commentUrl: PropTypes.string,
};

export default Comment;