import React from "react";
import axios from "axios";

export default class FetchNews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: "nuqwell"
    };
  }

  click = () => {
    axios.get("http://localhost:4000/").then((response) => {
      this.setState({data: response.data.text});
      console.log(response);
      
    });
  }
  
  render() {

    return (
          <div>
            <button onClick={this.click}>CLICK ME</button>
            <div>{this.state.data}</div>

          </div>
        );
      }
} 