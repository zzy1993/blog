import React from 'react';
import Layout from '../components/Layout';
import '../css/demo/demo.css';

export default class Blog extends React.Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }
  render() {
    return (
	    <Layout>
	      <div className="main" ref={node => this.node = node} >
	        <div className="main-container demo-container">
	        </div>
	      </div>
	    </Layout>
    );
  }
}
