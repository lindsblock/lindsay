import React from 'react';
import { Button } from 'semantic-ui-react';
import './Footer.css';


const Footer = () => (
  <div className="footer">
    <nav className="footer_layout">
      <div className="footer_icons">
        <a href="https://www.facebook.com/lindsay.wolthuis">
          <Button size="large" circular color='facebook' icon='facebook' />
        </a>
        <a href="https://www.linkedin.com/in/lindsay-block0805">
          <Button size="large" circular color='linkedin' icon='linkedin' />
        </a>
        <a href="https://github.com/lindsblock">
          <Button size="large" circular color="black" icon='github' />
        </a>
      </div>
      <div className="footer_links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about" >About</a>
          </li>
          <li>
            <a href="/projects" >Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Footer;
