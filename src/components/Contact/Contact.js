import React from 'react';
import { Header, Segment, Button, Grid, Divider, Image } from 'semantic-ui-react';

const Contact =() => {
  return(
    <div>
      <h1 className="headers">Contact Me</h1>
      <Segment  style={styles.segment}>
        <Header as="h1" style={{fontFamily:'marcellus', color:'rgb(114, 166, 96)', textAlign:'center'}}>
          Let's Create Something!
        </Header>
        <Divider />
        <Grid   stackable>
          <Grid.Column width={6}>
            <Image
              bordered
              circular
              size='medium'
              src='../images/lindsay.jpeg'

            />
          </Grid.Column>
          <Grid.Column width={10} >
          <Divider hidden />
            <p>
              If you like my work and need a website or would like to collaborate on a project, find me on social media or message me below!
            </p>
            <p>
              Also, make sure you check out my Github for more of my work.
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
              <Button style={{backgroundColor:'rgb(252, 177, 193)'}} >
                <a  style={styles.button} href="mailto:lindsay.block05@gmail.com?Subject=Hello" target="_top">Say Hi!</a>
              </Button>

            </div>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  )
}
const styles = {
  button: {
    color: 'white',
    fontSize:'20px',
    fontFamily:'marcellus',
    backgroundColor:'rgb(252, 177, 193)',


  },
  segment: {
    padding:'50px',
    backgroundColor: 'rgb(246, 245, 245, .9)',
    color:'rgb(99,99,99)',
    fontFamily:'marcellus',
    fontSize:'20px',
    margin:'0 80px 100px'
  }
}
export default Contact;
