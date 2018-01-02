import React from 'react';

const PATH_HEADSHOT = "./img/headshot.jpg";

export default class HomeBanner extends React.Component {
  render() {
    return (
      <div className="banner-container">
        <div className="banner-photo">
          <img src={PATH_HEADSHOT} alt="headshot" />
        </div>
        <div className="banner-desc">
          <h1>Zhiyuan Zhao</h1>
          <p>Software Developer / Webapp Builder</p>
          <div className="banner-link">
            <div className="link">
              <a target="_blank" rel="noopener noreferrer" href="http://zzy1993.github.io">Blog</a>
            </div>
            <div className="link">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/zzy1993">Github</a>
            </div>
            <div className="link">
              <a target="_blank" rel="noopener noreferrer" href="https://www.happsnow.com">Happsnow</a>
            </div>
            <div className="link">
	            <a target="_blank" rel="noopener noreferrer" href="https://galler.herokuapp.com">Galler</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
