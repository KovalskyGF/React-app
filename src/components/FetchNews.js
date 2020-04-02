import React from "react";

export default class FetchNews extends React.Component {

  state = {
    loading: true,
    data: null
  };

  async componentDidMount() {
    const url = "http://localhost:4000/";
    const response = await fetch(url);
    const result = await response.json();
    this.setState({ loading: false, data: result.items[0]  });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.data) {
      return <div>didn't get a person</div>;
    }

    return (
          <div>
            <div>{this.state.data.name} {this.state.data.name}</div>
            <div></div>
            <div>{this.state.data.name}</div>

          </div>
        );
      }
} 