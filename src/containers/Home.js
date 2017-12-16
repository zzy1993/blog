import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
// import HomeCardArea from '../components/home/homecardarea';

export default class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Banner />
      </Layout>
    );
  }
}
