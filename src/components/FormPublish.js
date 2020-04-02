import React from 'react';


class FormPublish extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('Output: ' + this.state.value);
        event.preventDefault();
    }


    
    render() {
        return (
                <div className="FormPublish">
                    <div className="container">
	                    <div className="row justify-content-md-center">
	                        <div className="col-md-6 col-md-offset-2">
    		                    <h1>Create post</h1>
    		                    <form method="post" action="/publish">


                                    <div className="form-group float-left">
                                        <label htmlFor="title" >First name   <span className="require ">*</span>
                                        <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" name="firstname" />
                                        </label>
                                    </div>

                                    <div className="form-group float-right">
                                        <label htmlFor="title">Last name<span className="require ">*</span></label>
                                        <input type="text" className="form-control" name="lastname" />
                                    </div>

                                    <div className="form-group float-left">
                                        <label htmlFor="title">E-mail<span className="require ">*</span></label>
                                        <input type="text" className="form-control" name="email" />
                                    </div>

                                    
                                    <div className="form-group float-right">
                                        <label htmlFor="title">Phone <span className="require ">*</span></label>
                                        <input type="text" className="form-control" name="phone" />
                                    </div>
    		    
                                    <div className="form-group justify-content-md-center">
                                        <label htmlFor="title">Description <span className="require">*</span></label>
                                        <input type="text" className="form-control" name="description" />
                                    </div>
                                                                   
                                    <div className="form-group">
                                        <label htmlFor="description">Message</label>
                                        <textarea rows="5" className="form-control" name="message" ></textarea>
                                    </div>

    		    
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-success">
                                            Create
                                        </button>
                                        <button type="submit" className="btn btn-default">
                                            Cancel
                                        </button>
                                    </div>
    		    
    		                    </form>


		                    </div>	
	                    </div>
                    </div>
                </div>
        );
    }
}

export default FormPublish;