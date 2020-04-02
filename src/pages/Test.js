import React from 'react';

import { Helmet } from 'react-helmet';
const NameCurrentPage = "Test";

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            text: 'Text'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value} );
    }

    handleSubmit(event) {
        alert('Сообщение: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <Helmet>
                    <title>{ NameCurrentPage }</title>
                </Helmet>

                <h1>Hello, it's page of Test!</h1>
                
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        <hr></hr>
                        <button type="submit" className="btn btn-success">Complete</button>  
                    </form>  
                    <h1>{this.state.text}</h1>
                
            </div>
        );
    }
}

export default Test;