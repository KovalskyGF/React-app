import React, { Component } from 'react';
import './App.css';
//-----------> Begin export Pages <----------//
import News from './pages/News';
import Publish from './pages/Publish'
//-----------> End export Pages <----------//

//-----------> Begin export Components <----------//
import Header from './components/Header';

//-----------> End export Components <----------//

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        
          <Router>
            <div className="App">
            <Header />
              <Switch>
                <Route exact path="/" component={News} />
                <Route exact path="/publish" component={Publish} />
              </Switch>
            </div>
          </Router>
       
          


          

          
      </div>

      

    );
  }
}

export default App;