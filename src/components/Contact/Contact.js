import React from 'react';
import { Header, Button, Grid, Divider, Image } from 'semantic-ui-react';
import './Contact.css';

const Contact =() => {
  return(
    <div>
      <h1 className="headers">Contact Me</h1>
      <div className="contact_div">
        <Header as="h1" style={{fontFamily:'marcellus', color:'rgb(99,99,99)', textAlign:'center', fontSize:'40px'}}>
          Let's Create Something!
        </Header>
        <Divider />
        <Grid  className="contact_grid" stackable>
          <Grid.Column
            style={{ display:'flex', justifyContent:'center', alignItems:'center'}}
          width={6}>
            <Image
              bordered
              circular
              size='medium'
              src='../images/me.JPG'
            />
          </Grid.Column>
          <Grid.Column width={10} >
          <Divider hidden />
            <p>
              If you like my work and need a website or would like to collaborate on a project, find me on social media or message me below!
            </p>
            <p>
              Also, make sure you check out my Github for more of my projects, as well as my LinkedIn for my work experience.
            </p>
            <Divider hidden />
            <Divider hidden />
            <div style={{display:'flex',justifyContent:'center'}}>
              <a href="https://www.facebook.com/lindsay.wolthuis">
                <Button size="huge" circular color='facebook' icon='facebook' />
              </a>
              <a href="https://www.linkedin.com/in/lindsay-block0805">
                <Button size="huge" circular color='linkedin' icon='linkedin' />
              </a>
              <a href="https://github.com/lindsblock">
                <Button size="huge" circular color="black" icon='github' />
              </a>
            </div>
            <br />
            <div style={{display:'flex', justifyContent: 'center'}}>
              <button className="button" >
                <a  href="mailto:lindsay.block05@gmail.com?Subject=Hello" target="_top">Say Hi!</a>
              </button>
            </div>
          </Grid.Column>
        </Grid>
      </div>
      <div style={{height:'30vh'}}>
      </div>

    </div>
  )
}

export default Contact;
