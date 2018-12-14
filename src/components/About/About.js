import React from 'react';
import { Grid, Icon, Image, Divider} from 'semantic-ui-react';
import './About.css';


const about = () => {
  return (
    <div style={{textAlign:'center'}} >
      <h1 className="headers">About Me</h1>
      <div className="about">
        <h1 style={{fontFamily:'marcellus', paddingTop:'40px', fontSize:'50px'}} textalign="center" >What I Do</h1>
        <Divider />
        <Grid  style={{padding:'100px' }} stackable>
          <Grid.Row>
            <Grid.Column width={6}>
              <Image
                bordered
                circular
                size='medium'
                src='../images/lindsay.jpeg'
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <p>My name is Lindsay and I am a full-stack Web Developer located in Salt Lake City, Utah.
              I design and develop responsive, custom websites specific to your wants and needs. My specialty is working with React JS
              applications. </p>
              <p>I am a little bit of a perfectionist and I have an eye for detail. </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div style={{height:'30vh'}}>
      </div>
      <div className="skills">
        <h1 style={{fontFamily:'marcellus', paddingTop:'40px'}} textalign="center" >Skills</h1>
        <Divider />
        <Grid columns={3} stackable celled='internally'>
          <Grid.Row>
            <Grid.Column>
              <Icon name='js' size='large' style={{color: 'rgb(230, 179, 147)'}}/>
              <p>JavaScript/ES6</p>
            </Grid.Column>
            <Grid.Column>
              <Icon name='gem' size='large' style={{color: 'rgb(230, 179, 147)'}} />
              <p>Ruby/Ruby on Rails</p>
            </Grid.Column>
            <Grid.Column>
              <Icon name='html5' size='large' style={{color: 'rgb(230, 179, 147)'}} />
              <p>HTML5</p>
            </Grid.Column>
          </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Icon name='css3' size='large' style={{color: 'rgb(230, 179, 147)'}}/>
            <p>CSS</p>
          </Grid.Column>
          <Grid.Column>
            <Icon name='react' size='large' style={{color: 'rgb(230, 179, 147)'}} />
            <p>React/Redux</p>
          </Grid.Column>
          <Grid.Column>
            <Icon name='github' size='large' style={{color: 'rgb(230, 179, 147)'}}/>
            <p>Git</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Icon name='terminal' size='large' style={{color: 'rgb(230, 179, 147)'}}/>
            <p>Command Line</p>
          </Grid.Column>
          <Grid.Column>
            <Icon name='code' size='large' style={{color: 'rgb(230, 179, 147)'}}/>
            <p>Semantic/Bootatrap Frameworks</p>
          </Grid.Column>
          <Grid.Column>
            <Icon name='database' size='large' style={{color: 'rgb(230, 179, 147)'}}/>
            <p>PostgreSQL</p>
          </Grid.Column>
        </Grid.Row>
        </Grid>
      </div>
      <div style={{height:'30vh'}}>
      </div>
      <div className="skills">
        <h1 style={{fontFamily:'marcellus', paddingTop:'40px'}}>Education</h1>
        <Divider />
        <Grid columns={2} stackable celled='internally' >
          <Grid.Row>
            <Grid.Column>
              <Icon  name="graduation" size="huge" style={{color:'rgb(230, 179, 147)', marginTop:'20px'}}></Icon>
            </Grid.Column>
            <Grid.Column style={{
              padding:'10px',
              fontFamily:'marcellus',
              fontSize:'23px',
              }}
            >
              <strong>DevPoint Labs</strong>
              <p>2018 - Web Development Certification</p>
              <strong>Continuing Ed- Udemy</strong>
              <p>2018- React 16- The Complete Guide Online Course</p>
              <strong>SLCC</strong>
              <p>2015 - Associate's Degree in General Education </p>
              <strong>SLCC</strong>
              <p>2015 - Associate's Degree of Applied Science in Physical Therapist Assisting </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

      <div className="bottom_divs">
        <p>Check out my LinkedIn for my work experience!</p>
        <button className="button">
          <a href="https://www.linkedin.com/in/lindsay-block0805">
          LinkedIn
          </a>
        </button>
      </div>
    </div>
  )
}

export default about;
