import React, { Component } from 'react';
import { Image, Segment, Divider, Button } from 'semantic-ui-react';
import ScrollUpButton from "react-scroll-up-button"

class Home extends Component {
  render(){
    return(
      <div>
        <Image style={{padding: '20px', marginBottom:'50px'}} src="../images/logo.png" size="massive" centered/>
        <Image style={{height:'auto, width"100%', margin: '0'}} src="../images/home.jpg"/>
        <Segment style={{
          margin:'0',
          padding:'70px',
          textAlign:'center',
          fontSize:'20px',
          fontFamily:'marcellus',
          backgroundColor: 'rgb(246, 245, 245, .9)'
        }}>
          <p style={{fontFamily:'Marcellus', fontSize:'20px', color:'rgb(99, 99, 99)'}}>Hey there! My name is Lindsay Block. I am a Full-Stack Web Developer located in SLC, Utah.</p>
          <p style={{fontFamily:'Marcellus', fontSize:'40px', color:'rgb(99, 99, 99)'}}>Let's get in touch.</p>
          <Button style={styles.button}>EMAIL ME!</Button>
        </Segment>
        <Divider hidden />
      </div>
    )
  }
}
const styles = {
  button: {
    color: 'white',
    fontSize:'20px',
    fontFamily:'marcellus',
    backgroundColor:'rgb(252, 177, 193)'
  }
}

export default Home;
