import React from 'react';
import Layout from '../Layout/index';
import Banner from './Banner';
import CardArea from './CardArea';
import '../../css/home.css'


export default class Home extends React.Component {
  render() {
    return (
      <Layout>
	      <div className="home">
		      <div className="container">
	          <Banner/>
			      <CardArea/>
		      </div>
	      </div>
      </Layout>
    );
  }
}
