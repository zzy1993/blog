import React from 'react';
import { Link } from 'react-router-dom';

export default ({ cardData }) => {
	const { img, href, title, description } = cardData;
	return (
		<div className="card">
			<div className="card-info">
				<div className="card-name">
					<a href={href}>{title}</a>
				</div>
				<div className="card-desc">
					{description}
				</div>
				<div className="card-link">
					<a href={href}>Click to View</a>
				</div>
			</div>
			<div className="card-figure">
				<img src={img}/>
			</div>
		</div>
	);
}