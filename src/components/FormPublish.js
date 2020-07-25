import React from 'react';

class FormPublish extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                description: '',
                message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let { value, name } = e.target;
        this.setState({ [name]: value }); 
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.SendData();
    }

    async SendData() { 
        const url = "http://localhost:4001/";
        let getFromState = this.state;
        
        let defaultOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(getFromState)
        };
        try {
            const response = await fetch(url, defaultOptions);
            const result = await response.json();
        }catch(e) {
            console.log(this.result.message);
        }
        

    }



    render() {
        return (
                <div className="FormPublish">
                    <div className="container">
	                    <div className="row justify-content-md-center">
	                        <div className="col-md-6 col-md-offset-2">
    		                    <h1>Create post</h1>
    		                    <form method="POST" onSubmit={this.handleSubmit}>
                                    <div className="form-group float-left">
                                        <label htmlFor="title1">First name<span   className="require ">*</span></label>
                                        <input type="text" value={this.state.firstname} onChange={this.handleChange} className="form-control" name="firstname" />
                                    </div>

                                    <div className="form-group float-right">
                                        <label htmlFor="title2">Last name<span className="require ">*</span></label>
                                        <input type="text" value={this.state.lastname} onChange={this.handleChange} className="form-control" name="lastname" />
                                    </div>

                                    <div className="form-group float-left">
                                        <label htmlFor="title">E-mail<span className="require ">*</span></label>
                                        <input type="text" value={this.state.email} onChange={this.handleChange} className="form-control" name="email" />
                                    </div>

                                    <div className="form-group float-right">
                                        <label htmlFor="title">Phone <span className="require ">*</span></label>
                                        <input type="text" value={this.state.phone} onChange={this.handleChange} className="form-control" name="phone" />
                                    </div>
    		    
                                    <div className="form-group justify-content-md-center">
                                        <label htmlFor="title">Description <span className="require">*</span></label>
                                        <input type="text" value={this.state.description} onChange={this.handleChange} className="form-control" name="description" />
                                    </div>
                                                                   
                                    <div className="form-group">
                                        <label htmlFor="description">Message</label>
                                        <textarea rows="5" className="form-control" value={this.state.message} onChange={this.handleChange} name="message" ></textarea>
                                    </div>
                                    
                                    <button type="submit"  className="btn btn-success">
                                            Create
                                    </button>
                                    <button type="submit" className="btn btn-default">
                                            Cancel
                                    </button>
    		                    </form>
		                    </div>	
	                    </div>
                    </div>
                </div>
        );
    }
}

export default FormPublish;