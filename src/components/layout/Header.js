import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/header.css';

export default () => {
  return (
    <div className="header">
      <div className="title"><Link to="/">Zhiyuan's Main Page</Link></div>
      <div className="subtitle"><p></p></div>
      <div className="nav">
        <div className="nav-item"><Link to="/">Home</Link></div>
        <div className="nav-item"><Link to="/blog">Blog</Link></div>
        <div className="nav-item"><Link to="/about">About Me</Link></div>
      </div>
    </div>
  );
}
