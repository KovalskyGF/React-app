import React, { Component } from 'react';
import './App.css';
//-----------> Begin export Pages <----------//
import News from './pages/News';
import AddNews from './pages/AddNews';
import Test from './pages/Test';
//-----------> End export Pages <----------//

//-----------> Begin export Components <----------//
import Header from './components/Header';

//-----------> End export Components <----------//
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (

        
          <Router>
            <div className="App">
            <Header />
              <Switch>
                <Route exact path="/" component={News} />
                <Route exact path="/AddNews" component={AddNews} />
                <Route exact path="/test" component={Test} />
              </Switch>
            </div>
          </Router>

    
       
          


          

          


      

    );
  }
}

export default App;