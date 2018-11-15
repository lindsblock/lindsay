import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import './index.css';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import { Sidebar, Menu, Button } from 'semantic-ui-react';

class App extends Component {
  state ={ visible: false}

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const {visible} = this.state
    return (
      <div className="background">
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
              <Link style={{color:'rgb(114, 166, 96)'}} to="/">
                Home
              </Link>
            </Menu.Item>
            <Menu.Item name='about'>
              <Link  style={{color:'rgb(114, 166, 96)'}} to='/about'>
                About
              </Link>
            </Menu.Item>
            <Menu.Item name='projects'>
              <Link style={{color:'rgb(114, 166, 96)'}} to='/projects'>
                Projects
              </Link>
            </Menu.Item>
            <Menu.Item name='contact'>
              <Link  style={{color:'rgb(114, 166, 96)'}} to='/contact'>
                Contact
              </Link>
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Button circular icon="bars" style={{ float: 'right', margin:'10px', color: 'rgb(114, 166, 96)'}} onClick={this.toggleVisibility} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
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
