import React from 'react';
import { Row, Col } from 'antd';
import Layout from '../Layout';
import Content from './Content';
import '../../css/article.css';

const Article = (props) => {
	return (
		<div className="article">
			<div className="container">
				<Row>
					<Col xs={24} sm={24} md={18}>
						<Content {...props.article}/>
					</Col>
					{/*
					<Col xs={0} sm={0} md={6}>
						<ArticleNavigation/>
					</Col>
					*/}
				</Row>
			</div>
		</div>
	);
};

export default Article;