import React from 'react';
import { Row, Col } from 'antd';
import Layout from '../Layout/index';
import ArticleList from './ArticleList';
import ArticlePaging from './ArticlePaging';
import Aside from './Aside';
import '../../css/blog.css';

const Blog = ({ articles, pageSize, pageNumber,
	setPageNumber, tags, tagName }) => {
	if (tagName) {
		articles = articles.filter((article) => {
			let result = false;
			article.labels.forEach((label) => {
				result = (label.name == tagName) || result;
			});
			return result;
		});
	}
  return (
    <Layout>
	    <div className="blog">
		    <div className="container">
			    <Row className="main-container bgcl-bright">
				    <Col xs={24} sm={24} md={18}>
					    <div className="article-container">
						    <div className="article-banner">
							    <h2>Welcome to new page for my articles!</h2>
						    </div>
						    <ArticleList articles={articles}
						                 pageSize={pageSize}
						                 pageNumber={pageNumber} />
						    <ArticlePaging switchPage={setPageNumber}
						                   pageSize={pageSize}
						                   total={articles.length} />
					    </div>
				    </Col>
						<Col xs={0} sm={0} md={6}>
							<Aside tags={tags}/>
						</Col>
			    </Row>
		    </div>
	    </div>
    </Layout>
  );
};

export default Blog;