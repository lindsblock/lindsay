import React from 'react';
import './Modal.css';
import { Button, Divider } from 'semantic-ui-react';

const canDuuModal = ({ handleClose, showing }) => {
  const showOrHide = showing ? "modal display-block" : "modal display-none";
  return(
    <div className={showOrHide}>
      <section className="modal-main">
        <Button size="mini" icon="x" circular style={{position:'absolute', top:'0', right:'0', margin:'10px'}} onClick={handleClose} />
        <h1 style={{fontFamily:'marcellus'}}>Can Duu</h1>
        <p>
          This was my portfolio project I collaborated on for school. We were each assigned into groups
          to work on real work projects for actual clients. My role in this project was to build the forms for user input
          and allow users to upload photos of their projects they needed as well as profile photos.
        </p>
        <p>
          This project was so much fun to work on and we accomplished a lot in a short amount of time.
          I just wish we could have been able to finish it to see the final product!
        </p>
        <strong>This app was written in...</strong>
        <Divider hidden />
        <p>React with Redux</p>
        <p>Javascript/ES6</p>
        <p>Ruby on Rails Backend</p>
        <button className="button" >
          <a href="mailto:lindsay.block05@gmail.com?Subject=Hello" target="_top">Ask Me For Details</a>
        </button>
      </section>
    </div>
  )
}

export default canDuuModal;
