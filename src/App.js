import React, { Component } from 'react';
import './App.css';
//-----------> Start export Components <----------//
import News from './pages/News';
import Publish from './pages/Publish'
//-----------> Finish export Components <----------//

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';


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