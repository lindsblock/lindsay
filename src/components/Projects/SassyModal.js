import React from 'react';
import './Modal.css';
import { Button, Grid } from 'semantic-ui-react';

const sassyModal = ({ handleClose, showing }) => {
  const showOrHide = showing ? "modal display-block" : "modal display-none";
  return(
    <div className={showOrHide}>
      <section className="modal-main">
      <h1 style={{fontFamily:'marcellus'}} >Sassy Lash & Esthetics</h1>
      <p>This was my first site I completed out of school for my friend's eyelash extension business.</p>
      <p>This app was written in...</p>
      <p>React</p>
      <p>Javascript/ES6</p>
      <p>Ruby On Rails Backend</p>
      <Button style={styles.button}>
      <a style={styles.button} href="https://www.sassylashesthetics.com/">
      Visit Site
      </a>
    </Button>
      <Button style={styles.button} onClick={handleClose} >Close</Button>
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

export default sassyModal;
