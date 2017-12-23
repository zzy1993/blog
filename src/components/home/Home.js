import React from 'react';
import Layout from '../layout/Layout';
import Banner from './Banner';

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
