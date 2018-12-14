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
      <p>This was my first site I completed out of school for my friend's eyelash extension business.
      She wanted something fairly simple, yet wanted it to match her fun personality.
      This app is fully responsive and is functional across multiple devices.  </p>
      <p>Since building this app I have taken some online classes, and have learned better ways to do things
      and improve my skills. Someday I am hoping to re-work this site and clean up my code, but for now it is
      functional and I love it!</p>
      <strong>This app was written in...</strong>
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
