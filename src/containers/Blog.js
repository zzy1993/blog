import React from 'react';
import { Row, Col } from 'antd';
import Layout from '../components/layout/Layout';
import ArticleList from '../components/blog/ArticleList';
import ArticlePaging from '../components/blog/ArticlePaging';
import Aside from '../components/blog/Aside';
import './blog.css';

export default class Blog extends React.Component {

	componentWillMount(){

	}

	componentWillUpdate(){

	}

  render() {
    return (
	    <Layout>
		    <div className="container">
			    <div className="container-inner blog-background">
				    <Row>
					    <Col xs={24} sm={24} md={18}>
						    <div className="blog-article-area">
							    <div className="blog-article-banner">
								    <h2>Welcome</h2>
							    </div>
							    <ArticleList/>
							    <ArticlePaging/>
						    </div>
					    </Col>
					    <Col xs={0} sm={0} md={6}>
						    <div className="blog-aside-area">
						      <Aside/>
						    </div>
					    </Col>
				    </Row>
			    </div>
		    </div>
	    </Layout>
    );
  }
}
