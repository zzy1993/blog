import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
  render() {
    return (
		  <div className="wrapper background">
			  <Header />
			  <div className="content">
			    {this.props.children}
			  </div>
			  <Footer />
		  </div>
    );
  }
}
