import React from 'react';
import './Modal.css';
import { Button, Grid } from 'semantic-ui-react';

const canDuuModal = ({ handleClose, showing }) => {
  const showOrHide = showing ? "modal display-block" : "modal display-none";
  return(
    <div className={showOrHide}>
      <section className="modal-main">
      <h1 style={{fontFamily:'marcellus'}}>Can Duu</h1>
      <p>This was my portfolio project I collaborated on for school. See it on my Github!</p>
      <p>This app was written in...</p>
      <p>React</p>
      <p>Javascript/ES6</p>
      <p>Rails Backend</p>
      <Button style={styles.button} >
        <a  style={styles.button} href="mailto:lindsay.block05@gmail.com?Subject=Hello" target="_top">Ask Me For Details</a>
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

export default canDuuModal;
