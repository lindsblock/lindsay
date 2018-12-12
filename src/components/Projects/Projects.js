import React, { Component } from 'react';
import {  Icon, Button, Segment } from 'semantic-ui-react';
import './Projects.css';
import SassyModal from './SassyModal';
import CarTrackerModal from './CarTrackerModal';
import CanDuuModal from './CanDuuModal';

class Projects extends Component {
  state = {
    showingOne: false,
    showingTwo: false,
    showingThree: false
  }

  showSassyModal = () => {
    this.setState({showingOne: true})
  }
  showCarModal = () => {
    this.setState({showingTwo: true})
  }
  showCanModal = () => {
    this.setState({showingThree: true})
  }

  closeSassyModal = () => {
    this.setState({showingOne: false})
  }
  closeCarModal = () => {
    this.setState({showingTwo: false})
  }
  closeCanModal = () => {
    this.setState({showingThree: false})
  }

  render(){
    return(
      <div style={{textAlign:'center'}}>
        <h1 className="headers">What I'm Working On...</h1>
        <Segment style={{
          margin:'0',
          padding:'70px',
          background:'rgba(246, 245, 245, .9)',
          }}
        >
        <div className="container">
          <img alt="sassylash" style={{height:'auto', width: '100%'}} className="image" src='../images/sassylash.jpg' />
          <div className="middle">
            <Button onClick={this.showSassyModal} style={styles.button}>Sassy Lash & Esthetics</Button>
          </div>
        </div>
      </Segment>
        <Segment style={{
          margin:'0',
          padding:'70px',
          background:'rgba(252, 177, 193, .9)',
          }}
        >
          <div className="container">
            <img alt="greg" style={{height:'auto', width: '100%'}} className="image" src='../images/greg.jpg' />
            <div className="middle">
              <Button onClick={this.showCarModal} style={styles.button}>Greg's Car Tracker</Button>
            </div>
          </div>
        </Segment>
        <Segment style={{
          margin:'0',
          padding:'70px',
          background:'rgba(168, 196, 157, .9)',
          }}
        >
          <div className="container">
            <img alt="canduu" style={{height:'auto', width: '100%'}} className="image" src='../images/canduu.jpg' />
            <div className="middle">
              <Button onClick={this.showCanModal} style={styles.button}>Can Duu</Button>
            </div>
          </div>
        </Segment>
        <Segment style={{
          margin:'0',
          padding:'70px',
          textAlign:'center',
          fontSize:'20px',
          fontFamily:'marcellus',
          background: 'rgba(246, 245, 245, .9)',
          color:'rgb(99,99,99)'
        }}>
          <p>Make sure to visit my Github to see more projects!</p>
          <Button style={styles.button}>
            <a style={styles.button} href="https://github.com/lindsblock">
            <Icon name='desktop' />
            Github
            </a>
          </Button>
        </Segment>
        <SassyModal showing={this.state.showingOne} handleClose={this.closeSassyModal}/>
        <CarTrackerModal showing={this.state.showingTwo} handleClose={this.closeCarModal}/>
        <CanDuuModal showing={this.state.showingThree} handleClose={this.closeCanModal}/>
      </div>
    )
  }
}
const styles = {
  segmentHeaders: {
    fontFamily:'marcellus',
    fontSize:'30px',
    color:'rgb(99,99,99)'
  },

  button: {
    fontFamily:'marcellus',
    backgroundColor:'rgb(168, 196, 157)',
    color:'rgb(99,99,99)'
  }
}

export default Projects;
