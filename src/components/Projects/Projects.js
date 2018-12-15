import React, { Component } from 'react';
import {  Icon} from 'semantic-ui-react';
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
        <div className="project_div">
          <div className="container">
            <img alt="sassylash" style={{height:'auto', width: '100%'}} className="image" src='../images/sassylash.jpg' />
            <div className="middle">
              <button onClick={this.showSassyModal} className="button">Sassy Lash & Esthetics</button>
            </div>
          </div>
        </div>
        <div className="bottom_divs"></div>
        <div className="project_div">
          <div className="container">
            <img alt="greg" style={{height:'auto', width: '100%'}} className="image" src='../images/greg.jpg' />
            <div className="middle">
              <button onClick={this.showCarModal} className="button">Greg's Car Tracker</button>
            </div>
          </div>
        </div>
        <div className="bottom_divs"></div>
        <div className="project_div">
          <div className="container">
            <img alt="canduu" style={{height:'auto', width: '100%'}} className="image" src='../images/canduu.jpg' />
            <div className="middle">
              <button onClick={this.showCanModal} className="button">Can Duu</button>
            </div>
          </div>
        </div>
        <div className="bottom_divs">
          <p>Make sure to visit my Github to see more projects!</p>
          <button className="button">
            <a href="https://github.com/lindsblock">
            <Icon name='desktop' />Github</a>
          </button>
        </div>
        <SassyModal showing={this.state.showingOne} handleClose={this.closeSassyModal}/>
        <CarTrackerModal showing={this.state.showingTwo} handleClose={this.closeCarModal}/>
        <CanDuuModal showing={this.state.showingThree} handleClose={this.closeCanModal}/>
      </div>
    )
  }
}


export default Projects;
