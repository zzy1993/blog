import React from 'react';
import Layout from '../components/layout/Layout';
import Banner from '../components/home/Banner';

export default class Home extends React.Component {
  render() {
    return (
      <Layout>
	      <div className="container">
		      <div className="container-inner">
            <Banner />
		      </div>
	      </div>
      </Layout>
    );
  }
}
