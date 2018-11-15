import React, { Component } from 'react';
import { Image, Sidebar, Segment, Container, Divider } from 'semantic-ui-react';

class Home extends Component {
  render(){
    return(
      <div>
        <Image style={{padding: '20px', marginBottom:'50px'}} src="../images/logo.png" size="massive" centered/>
        <Image style={{height:'auto, width"100%', margin: '0'}} src="../images/home.jpg"/>

        <Segment style={{backgroundColor:'rgb(84, 175, 172)', textAlign:'center', padding: '80px', margin: '10'}}>
          <p style={{fontFamily:'Marcellus', fontSize:'20px', color:'rgb(88, 88, 88)'}}>Hey there! My name is Lindsay Block. I am a Full-Stack Web Developer located in SLC, Utah.</p>
          <p style={{fontFamily:'Marcellus', fontSize:'20px', color:'rgb(88, 88, 88)'}}>Let's get in touch. View my contact info below.</p>
        </Segment>
        <Divider  />
      </div>
    )
  }
}
export default Home;
