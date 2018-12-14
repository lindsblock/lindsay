import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import './Home.css';

class Home extends Component {
  render(){
    return(
      <div>
        <Image style={{padding: '50px'}} src="../images/logo2.png" size="massive" centered/>
        <div className="home">
          <p style={{fontSize:'30px'}}>Looking for a Web Developer?</p>
          <p>Look no further! My name is Lindsay Block, and I am a Full-Stack Web Developer based in SLC, Utah. </p>
          <p>I can build you a fully responsive, custom designed website specific to your needs.</p>

        </div>
        <div className="bottom_divs">
          <p style={{fontSize:'40px'}}>Let's get in touch.</p>
          <button className="button" >
            <a href="/about" target="_top">Find Out More</a>
          </button>
        </div>
      </div>
    )
  }
}


export default Home;
