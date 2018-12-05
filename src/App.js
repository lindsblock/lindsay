import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar'


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
