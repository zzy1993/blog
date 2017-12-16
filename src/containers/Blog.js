import React from 'react';
import Layout from '../components/Layout';
// import BlogIndex from '../components/blog/blogindex';
// import Article from '../components/article/article';
// import Archive from '../components/archive/archive';
// import Tag from '../components/tag/tag';
// import Category from '../components/category/category';

export default class Blog extends React.Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }

  render() {
    return (
	    <Layout>
	    </Layout>
    );
  }
}
