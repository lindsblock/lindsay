import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      <div className="background" >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
      </div>
    );
  }
}


export default App;
