import React from 'react';
import { Header, Image, Icon, Button, Segment } from 'semantic-ui-react';
import ScrollUpButton from "react-scroll-up-button"

const projects = () => {
  return(
    <div>
      <h1 className="headers">What I'm Working On...</h1>
      <Segment style={{
        margin:'0',
        padding:'70px',
        textAlign:'center',
        fontSize:'20px',
        fontFamily:'marcellus',
        backgroundColor: 'rgb(246, 245, 245, .9)',
        color: 'rgb(99,99,99)'
      }}>
        <Image rounded centered size="big" src='../images/sassylash.jpg' />
        <Header style={styles.segmentHeaders}>Sassy Lash & Esthetics</Header>
        <p>My very first official site that I completed for my best friend's eyelash extension business.</p>
        <Button>
          <a style={styles.button} href="https://www.sassylashesthetics.com">
            <Icon name='desktop' />
            www.sassylashesthetics.com
          </a>
        </Button>
      </Segment>
      <Segment style={{
        margin:'0',
        padding:'70px',
        textAlign:'center',
        fontSize:'20px',
        fontFamily:'marcellus',
        backgroundColor:'rgb(252, 177, 193, .9)',
        color: 'rgb(99,99,99)'
      }}>
        <Image rounded centered size="big" src='../images/greg.jpg' />
        <Header style={styles.segmentHeaders}>Greg's Car Tracker</Header>
        <p>Project I started to make for my boyfriend so he can track modificaitons on his car.</p>
          <p> I am wanting to make this into an app someday for car enthusiasts.</p>
        <Button>
          <a style={styles.button} href="https://github.com/lindsblock">
          <Icon name='desktop' />
          See it on my Github
          </a>
        </Button>
      </Segment>
      <Segment style={{
        margin:'0',
        padding:'70px',
        textAlign:'center',
        fontSize:'20px',
        fontFamily:'marcellus',
        backgroundColor: 'rgb(168, 196, 157, .9)',
        color: 'rgb(99,99,99)'
      }}>
        <Image rounded centered size="big" src='../images/canduu.jpg' />
        <Header style={styles.segmentHeaders}>Can Duu</Header>
        <p>The portfolio project I collaborated on during school.</p>
        <Button>
          <a style={styles.button} href="/contact">
            <Icon name='desktop' />
            Ask me for details
          </a>
        </Button>
      </Segment>
      <Segment style={{
        margin:'0',
        padding:'70px',
        textAlign:'center',
        fontSize:'20px',
        fontFamily:'marcellus',
        backgroundColor: 'rgb(246, 245, 245, .9)',
        color:'rgb(99,99,99)'
      }}>
        <p>Make sure to visit my Github to see more projects!</p>
      </Segment>
    </div>
  )
}
const styles = {
  segmentHeaders: {
    fontFamily:'marcellus',
    fontSize:'30px',
    color:'rgb(99,99,99)'
  },

  button: {
    color:'rgb(114, 166, 96)',
    fontSize:'20px',
    fontFamily:'marcellus',
  }
}

export default projects;
