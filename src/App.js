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
import { Sidebar, Menu, Button } from 'semantic-ui-react';


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

const styles = {
  navHeaders: {
    fontFamily: 'Marcellus',
    fontSize: '20px',
    backgroundColor: 'rgb(246, 245, 245)',
    minHeight:'calc(900vh-80px)'
  }
}

export default App;
