import React from 'react';
import axios from 'axios';

class News extends React.Component {

    state = {}

  componentDidMount() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/photos/", true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var json_obj = JSON.parse(xhr.responseText);
          status = true;
          this.setState({ json_obj });
        } else {
          console.error(xhr.statusText);
        }
      }
    }.bind(this);
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
  }

  render() {
    return (
      <div>
          {this.state.json_obj ?  this.state.json_obj[1].title : 'loading...'}
      </div>
    );
  }
}

export default News;