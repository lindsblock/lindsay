import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import Footer from './Footer';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="background">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
