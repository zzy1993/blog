import React from 'react';
import { Link } from 'react-router-dom';
// import '../../css/home/homeheader.css';

export default class HomeHeader extends React.Component {
  render() {
    return (
      <div className="home-header">
        <div className="home-header-title"><Link to="/">Zhiyuan's Main Page</Link></div>
        <div className="home-header-subtitle"><p>Powered with React</p></div>
        <div className="home-header-nav">
          <div className="home-header-nav-item"><Link to="/">Home</Link></div>
          <div className="home-header-nav-item"><Link to="/blog">Blog</Link></div>
          <div className="home-header-nav-item"><Link to="/demo">Demo</Link></div>
          <div className="home-header-nav-item"><Link to="/about">About Me</Link></div>
        </div>
      </div>
    );
  }
}
