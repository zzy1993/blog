import React from 'react';
import { Link } from 'react-router-dom';
import Label from './Label';

export default ({ tags }) => {

	return(
		<div className="aside-container">
			<div className="aside-card-title">
				<Link to="/blog">Topic Tags</Link>
			</div>
			<div className="aside-card-content">
				{tags.map((tag) => (
					<Label key={tag.id} tag={tag}/>
				))}
			</div>
			<div className="aside-card-content">
				<div className="aside-card-content-clear">
					<Link to={`/blog`}>Clear Tags</Link>
				</div>
			</div>
		</div>
	)
}