import React from 'react';
import { Helmet } from 'react-helmet';
import FetchNews from '../components/FetchNews';

const NameCurrentPage = "News";

class News extends React.Component {

  render() {
    return (
      <div>
         <Helmet>
            <title>{ NameCurrentPage }</title>
          </Helmet>
          <FetchNews/>
      </div>
    );
  }
}

export default News;