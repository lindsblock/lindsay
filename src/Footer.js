import React from 'react';
import { Button, Menu, Segment, Header} from 'semantic-ui-react';

const Footer = () => {
    return (
      <div>
        <section style={{
          backgroundColor:'rgb(246, 245, 245)',
          bottom: '0',
          left: '0',
          textAlign: 'center',
          width: '100%',
          /* position: absolute; */
          padding: '20px 10px 10px 10px',
        }}>
             <a href="https://www.facebook.com/lindsay.wolthuis">
               <Button size="large" circular color='facebook' icon='facebook' />
             </a>
               <a href="https://www.linkedin.com/in/lindsay-block0805">
               <Button size="large" circular color='linkedin' icon='linkedin' />
             </a>
             <a href="https://github.com/lindsblock">
               <Button size="large" circular color="black" icon='github' />
             </a>
            <Menu secondary widths={6}>
                <a  style={{padding:'10px'}} href="/">
                <Header style={styles.footerHeaders}>Home</Header>
              </a>
                <a  style={{padding:'10px'}} href="/about">
                <Header style={styles.footerHeaders}>About</Header>
              </a>
              <a style={{padding:'10px'}}  href="/projects">
                <Header style={styles.footerHeaders}>Projects</Header>
              </a>
              <a style={{padding:'10px'}}  href="/contact">
                <Header style={styles.footerHeaders}>Contact</Header>
              </a>
            </Menu>
          </section>
      </div>
    )
}

const styles = {
  footerHeaders: {
    fontFamily: 'Marcellus',
    fontSize: '16px',
    backgroundColor: 'rgb(246, 245, 245)',
    color:'rgb(114, 166, 96)'
  }
}

export default Footer;
