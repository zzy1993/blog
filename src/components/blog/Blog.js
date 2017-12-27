import React from 'react';
import {connect} from 'react-redux';
import { Row, Col } from 'antd';
import Layout from '../layout/Layout';
import ArticleList from './ArticleList';
import ArticlePaging from './ArticlePaging';
import Aside from './Aside';
import './blog.css';

import { getArticles, setPageNumber } from '../../redux/actions';

class Blog extends React.Component {
	
	componentDidMount(){
		const { pageSize, pageNumber } = this.props;
		this.props.getArticles(pageSize, pageNumber);
	}

	componentWillUpdate(){
	// 	const { pageSize, pageNumber } = this.props;
	// 	this.props.getArticles(pageSize, pageNumber);
	}

  render() {
	  console.log("Blog", this.props);
	  const { articles, pageSize, pageNumber} = this.props;
	  const { setPageNumber } = this.props;
    return (
	    <Layout>
		    <div className="container">
			    <div className="container-inner blog-background">
				    <Row>
					    <Col xs={24} sm={24} md={18}>
						    <div className="blog-article-area">
							    <div className="blog-article-banner">
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

const mapStateToProps = (state) => {
	const { articles } = state;
	return {
		...articles,
	}
};

const mapDispatchToProps = (dispatch) => ({
	getArticles: (pageSize, pageNumber) => dispatch(getArticles(pageSize, pageNumber)),
	setPageNumber: (pageNumber) => dispatch(setPageNumber(pageNumber)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Blog);