import React from 'react';
import Layout from '../Layout/index';
import '../../css/about.css';

export default () => {
  return (
    <Layout>
      <div className="about">
        <div className="container">
          <div className="about-detail about-desc">
            <h1>About Me</h1>
            <p>Computer Engineering Graduate Student</p>
            <p>Available from Jan 2018. Seeking Full-time SDE / Full-stack Positions</p>
          </div>
          <hr />
          <div className="about-detail about-contact">
            <h1>Contact Me</h1>
            <p>Blog：<a target="_blank" rel="noopener noreferrer" href="https://zhiyuan.herokuapp.com/#/blog">https://zzy1993.github.io</a></p>
            <p>Github：<a target="_blank" rel="noopener noreferrer" href="https://github.com/zzy1993">https://github.com/zzy1993</a></p>
            <p>Email： zhiyuanzhao93@gmail.com</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
