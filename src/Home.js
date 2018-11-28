import React, { Component } from 'react';
import { Image, Button } from 'semantic-ui-react';

class Home extends Component {
  render(){
    return(
      <div>
        <Image style={{padding: '20px', marginBottom:'50px', marginTop:'50px'}} src="../images/logo.png" size="massive" centered/>
        <div style={{
          margin: '0',
          padding: '70px',
          textAlign: 'center',
          fontSize: '20px',
          fontFamily: 'marcellus',
          background: 'rgb(246, 245, 245, .9)',
        }}>
          <p style={{fontSize:'20px', color:'rgb(99,99,99)'}}>Looking for a Web Developer?</p>
          <p style={{fontSize:'20px', color:'rgb(99,99,99)'}}>Look no further! My name is Lindsay Block, and I am a Full-Stack Web Developer based in SLC, Utah. </p>
          <p style={{fontSize:'40px', color:'rgb(99,99,99)'}}>Let's get in touch.</p>
          <Button style={{backgroundColor:'rgb(252, 177, 193)'}} >
            <a  style={styles.button} href="mailto:lindsay.block05@gmail.com?Subject=Hello" target="_top">Email Me!</a>
          </Button>
        </div>
        <Image style={{height:'auto, width"100%', margin: '0'}} src="../images/home.jpg"/>
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
