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
                    <div class="container">
	                    <div class="row justify-content-md-center">
	                        <div class="col-md-6 col-md-offset-2">
    		                    <h1>Create post</h1>
    		                    <form onSubmit={this.handleSubmit}>


                                    <div class="form-group float-left">
                                        <label for="title" >First name   <span class="require ">*</span></label>
                                        <input type="text" value={this.state.value} onChange={this.handleChange} class="form-control" name="slug" />
                                    </div>

                                    <div class="form-group float-right">
                                        <label for="title">Last name<span class="require ">*</span></label>
                                        <input type="text" class="form-control" name="slug" />
                                    </div>

                                    <div class="form-group float-left">
                                        <label for="title">E-mail<span class="require ">*</span></label>
                                        <input type="text" class="form-control" name="slug" />
                                    </div>

                                    
                                    <div class="form-group float-right">
                                        <label for="title">Phone <span class="require ">*</span></label>
                                        <input type="text" class="form-control" name="slug" />
                                    </div>
    		    
                                    <div class="form-group justify-content-md-center">
                                        <label for="title">Description <span class="require">*</span></label>
                                        <input type="text" class="form-control" name="title" />
                                    </div>




                                    

                                    
                                    
                                    <div class="form-group">
                                        <label for="description">Message</label>
                                        <textarea rows="5" class="form-control" name="description" ></textarea>
                                    </div>

    		    
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success">
                                            Create
                                        </button>
                                        <button type="submit" class="btn btn-default">
                                            Cancel
                                        </button>
                                    </div>
    		    
    		                    </form>

                                <h1>{this.state.value}</h1>

		                    </div>	
	                    </div>
                    </div>
                </div>
        );
    }
}

export default FormPublish;