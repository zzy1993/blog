import React from 'react';
import Layout from '../components/Layout';
// import '../../css/about/about.css';

export default class About extends React.Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }
  render() {
    return (
	    <Layout>
	      <div className="main" ref={node => this.node = node} >
	        <div className="main-container about-container">
	          <div className="about-detial about-desc">
	            <h1>About Me</h1>
	            <ul>
	              <li>From Electronics to Computer Engineering</li>
	              <li>Available from Jan 2018. Seeking Full-time SDE / Full-stack Positions</li>
	            </ul>
	          </div>
	          <hr />
	          <div className="about-detial about-contact">
	            <h1>Contact Me</h1>
	            <ul>
	              <li>Blog：<a target="_blank" rel="noopener noreferrer" href="https://zzy1993.github.io">https://zzy1993.github.io</a></li>
	              <li>Github：<a target="_blank" rel="noopener noreferrer" href="https://github.com/zzy1993">https://github.com/zzy1993</a></li>
	              <li>Email： zhiyuanzhao93@gmail.com</li>
	            </ul>
	          </div>
	        </div>
	      </div>
	    </Layout>
    );
  }
}
