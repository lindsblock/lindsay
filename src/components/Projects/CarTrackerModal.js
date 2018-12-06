import React from 'react';
import './Modal.css';
import { Button, Grid } from 'semantic-ui-react';

const carTrackerModal = ({ handleClose, showing }) => {
  const showOrHide = showing ? "modal display-block" : "modal display-none";
  return(
    <div className={showOrHide}>
      <section className="modal-main">
        <Button size="mini" icon="x" circular style={{position:'absolute', top:'0', right:'0', margin:'10px'}} onClick={handleClose} />
      <h1 style={{fontFamily:'marcellus'}}>Greg's Car Tracker</h1>
      <p>A project I am working on for my boyfriend to keep track of modifications to his car like tire rotations and oil changes. One day I would like to turn it into an app for car enthusiasts. </p>
      <p>This app was written in...</p>
      <p>React</p>
      <p>Javascript/ES6</p>
      <p>Rails Backend</p>
      <Button style={styles.button}>
        <a style={styles.button} href="https://github.com/lindsblock">
        See It On Github
        </a>
      </Button>
    </section>
    </div>
  )
}

const styles = {
  button: {
    color: 'white',
    fontSize:'15px',
    fontFamily:'marcellus',
    backgroundColor:'rgb(252, 177, 193)'
  }
}

export default carTrackerModal;
