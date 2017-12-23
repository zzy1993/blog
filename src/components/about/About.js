import React from 'react';
import Layout from '../layout/Layout';
import './about.css';

export default class About extends React.Component {

  render() {
    return (
	    <Layout>
	      <div className="container">
	        <div className="container-inner about-container">
	          <div className="about-detail about-desc">
	            <h1>About Me</h1>
              <p>From Electronics to Computer Engineering</p>
              <p>Available from Jan 2018. Seeking Full-time SDE / Full-stack Positions</p>
	          </div>
	          <hr />
	          <div className="about-detail about-contact">
	            <h1>Contact Me</h1>
              <p>Blog：<a target="_blank" rel="noopener noreferrer" href="https://zzy1993.github.io">https://zzy1993.github.io</a></p>
              <p>Github：<a target="_blank" rel="noopener noreferrer" href="https://github.com/zzy1993">https://github.com/zzy1993</a></p>
              <p>Email： zhiyuanzhao93@gmail.com</p>
	          </div>
	        </div>
	      </div>
	    </Layout>
    );
  }
}
