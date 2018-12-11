import React from 'react';
import './Modal.css';
import { Button } from 'semantic-ui-react';

const sassyModal = ({ handleClose, showing }) => {
  const showOrHide = showing ? "modal display-block" : "modal display-none";
  return(
    <div className={showOrHide}>
      <section className="modal-main">
      <Button size="mini" icon="x" circular style={{position:'absolute', top:'0', right:'0', margin:'10px'}} onClick={handleClose} />
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
