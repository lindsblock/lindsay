import React from 'react';
import './Modal.css';
import { Button, Divider } from 'semantic-ui-react';

const carTrackerModal = ({ handleClose, showing }) => {
  const showOrHide = showing ? "modal display-block" : "modal display-none";
  return(
    <div className={showOrHide}>
      <section className="modal-main">
        <Button size="mini" icon="x" circular style={{position:'absolute', top:'0', right:'0', margin:'10px'}} onClick={handleClose} />
        <h1 style={{fontFamily:'marcellus'}}>Greg's Car Tracker</h1>
        <p>
          This is a fun project I am working on for my boyfriend to keep track of modifications to his car.
          He will be able to track things like tire rotations and oil changes, which he already does in Excel, but
          I thought it would be more user friendly and fun to do it on his own website.
        </p>
        <p>
          I know other people (especially Subaru owners) that also keep track of modifications to their cars, and
          one day I would like to turn it into an app for car enthusiasts.
        </p>
        <strong>This app was written in...</strong>
        <Divider hidden />
        <p>React</p>
        <p>Javascript/ES6</p>
        <p>Ruby on Rails Backend</p>
        <button className="button">
          <a  href="https://github.com/lindsblock">
            See It On Github
          </a>
        </button>
      </section>
    </div>
  )
}

export default carTrackerModal;
