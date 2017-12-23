import React from 'react';
import './banner.css';

const PATH_HEADSHOT = "./img/headshot.jpg";

export default class HomeBanner extends React.Component {
  render() {
    return (
      <div className="home-banner">
        <div className="home-banner-me">
          <div className="home-banner-photo">
            <img src={PATH_HEADSHOT} alt="headshot" />
          </div>
          <div className="home-banner-desc">
            <h1>Zhiyuan Zhao</h1>
            <p>Using code building dream</p>
            <div className="home-banner-link">
              <div className="link">
                <a target="_blank" rel="noopener noreferrer" href="http://zzy1993.github.io">Blog</a>
              </div>
              <div className="link">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/zzy1993">Github</a>
              </div>
              <div className="link">
                <a target="_blank" rel="noopener noreferrer" href="https://galler.herokuapp.com">Galler</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
