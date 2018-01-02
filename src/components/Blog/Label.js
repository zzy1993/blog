import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Label = ({ tag }) => {
	const { color, name } = tag;
	console.log(color);
	const style = {
		backgroundColor: `#${color}`,
	};
	return (
		<div className="label" style={style}>
			<Link to={`/blog/tag/${name}`}>
				<i className="anticon anticon-tag-o" />{name}
			</Link>
		</div>
	);
};

Label.propTypes = {
	name: PropTypes.string,
	color: PropTypes.string,
};

export default Label;
