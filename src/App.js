import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { Sidebar, Menu, Button } from 'semantic-ui-react';
import ScrollUpButton from "react-scroll-up-button"


class App extends Component {
  state ={ visible: false}

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const {visible} = this.state
    return (
      <div className="background" >
        <Sidebar.Pushable>
          <Sidebar
            style={styles.navHeaders}
            as={Menu}
            animation='push'
            width='thin'
            direction='right'
            visible={visible}
            icon='labeled'
            vertical
            onHide={this.toggleVisibility}
            >
              <Menu.Item>
              <a style={{color:'rgb(114, 166, 96)'}} href="/" onClick={this.toggleVisibility}>
                Home
              </a>
            </Menu.Item>
            <Menu.Item name='about'>
              <a style={{color:'rgb(114, 166, 96)'}} href='/about' onClick={this.toggleVisibility}>
                About
              </a>
            </Menu.Item>
            <Menu.Item name='projects'>
              <a style={{color:'rgb(114, 166, 96)'}} href='/projects' onClick={this.toggleVisibility}>
                Projects
              </a>
            </Menu.Item>
            <Menu.Item name='contact'>
              <a  style={{color:'rgb(114, 166, 96)'}} href='/contact' onClick={this.toggleVisibility}>
                Contact
              </a>
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Button
              circular
              icon="bars"
              style={{
                float: 'right',
                margin:'5px',
                color: 'rgb(114, 166, 96)',
                backgroundColor: 'rgb(246, 245, 245)'
              }}
              onClick={this.toggleVisibility}
            />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Footer />

      </div>
    );
  }
}

const styles = {
  navHeaders: {
    fontFamily: 'Marcellus',
    fontSize: '20px',
    backgroundColor: 'rgb(246, 245, 245)',
  }
}

export default App;
