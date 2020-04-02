import React from 'react';
import { Helmet } from 'react-helmet';

import FormPublish from '../components/FormPublish';

const NameCurrentPage = "Add news";

class AddNews extends React.Component {
    render() {
        return (
            <div>

                <Helmet>
                    <title>{ NameCurrentPage }</title>
                </Helmet>   
                    <FormPublish />

            </div>
        );
    }
}

export default AddNews;