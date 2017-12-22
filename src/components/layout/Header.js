import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default class HomeHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-title"><Link to="/">Zhiyuan's Main Page</Link></div>
        <div className="header-subtitle"><p></p></div>
        <div className="header-nav">
          <div className="header-nav-item"><Link to="/">Home</Link></div>
          <div className="header-nav-item"><Link to="/blog">Blog</Link></div>
          <div className="header-nav-item"><Link to="/demo">Demo</Link></div>
          <div className="header-nav-item"><Link to="/about">About Me</Link></div>
        </div>
      </div>
    );
  }
}
