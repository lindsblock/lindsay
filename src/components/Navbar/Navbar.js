import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import './Navbar.css';

const navbar = () => (
  <header className='navbar'>
    <nav className='navbar_layout'>
      <a href="/">
        <img alt="logo" style={{display:'flex', height:'40px', margin:'10px'}}  src="../images/damask3.png"/>
      </a>
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
    <div className="mobileSizeDiv">
      <Dropdown
        floating
        text='Menu'
        style={{color: 'rgb(99,99,99)', fontFamily:'marcellus',fontSize: '24px', margin: '20px'}}>
        <Dropdown.Menu style={{background:'rgb(213, 217, 233)'}}>
          <Dropdown.Item style={{color:'rgb(99,99,99)'}} as="a" href="/" text='Home' />
          <Dropdown.Item style={{color:'rgb(99,99,99)'}} as="a" href="/about" text='About' />
          <Dropdown.Item style={{color:'rgb(99,99,99)'}} as="a" href="projects" text='Projects'  />
          <Dropdown.Item style={{color:'rgb(99,99,99)'}} as="a" href="contact" text='Contact' />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  </header>
)


export default navbar;
