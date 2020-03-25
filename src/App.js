import React, { Component } from 'react';
import './App.css';
//-----------> Start export Components <----------//
import Header from './components/Header';
import Hero from './components/Hero';
//-----------> Finish export Components <----------//

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header/>
        <Hero/>

      </div>
      
      
    );
  }
}

export default App;