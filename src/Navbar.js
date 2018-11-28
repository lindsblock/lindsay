import React from 'react';
import './Navbar.css';

const navbar = () => (
  <header className='navbar'>
    <nav className='navbar_layout'>
      <img style={{display:'flex', height:'40px', margin:'10px'}}  src="../images/damask.png"/>
      <div className='spacer'/>
      <div className='navbar_links'>
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
  </header>
  )


export default navbar;
