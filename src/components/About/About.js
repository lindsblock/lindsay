import React from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';

const about = () => {
  return (
    <div style={{textAlign:'center'}} >
      <h1 className="headers">Skills and Education</h1>
      <div style={{
        backgroundColor: 'rgba(246, 245, 245, .9)',
        fontFamily:'marcellus',
        fontSize:'30px',
        color:'rgb(99,99,99)',
        margin:'0'
        }}>
        <h1 style={{fontFamily:'marcellus'}} textAlign="center" >Skills</h1>
        <Grid columns={3} stackable celled='internally'>
          <Grid.Row>
            <Grid.Column>
              <Icon name='js' size='large' style={{color: 'rgb(114, 166, 96)'}}/>
              <p>JavaScript/ES6</p>
            </Grid.Column>
            <Grid.Column>
              <Icon name='gem' size='large' style={{color: 'rgb(114, 166, 96)'}} />
              <p>Ruby/Ruby on Rails</p>
            </Grid.Column>
            <Grid.Column>
              <Icon name='html5' size='large' style={{color: 'rgb(114, 166, 96)'}} />
              <p>HTML5</p>
            </Grid.Column>
          </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Icon name='css3' size='large' style={{color: 'rgb(114, 166, 96)'}}/>
            <p>CSS</p>
          </Grid.Column>
          <Grid.Column>
            <Icon name='react' size='large' style={{color: 'rgb(114, 166, 96)'}} />
            <p>React/Redux</p>
          </Grid.Column>
          <Grid.Column>
            <Icon name='github' size='large' style={{color: 'rgb(114, 166, 96)'}}/>
            <p>Git</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Icon name='terminal' size='large' style={{color: 'rgb(114, 166, 96)'}}/>
            <p>Command Line</p>
          </Grid.Column>
          <Grid.Column>
            <Icon name='code' size='large' style={{color: 'rgb(114, 166, 96)'}}/>
            <p>Semantic/Bootatrap Frameworks</p>
          </Grid.Column>
          <Grid.Column>
            <Icon name='database' size='large' style={{color: 'rgb(114, 166, 96)'}}/>
            <p>PostgreSQL</p>
          </Grid.Column>
        </Grid.Row>
        </Grid>
      </div>
      <Segment style={{
        margin:'0',
        itemsAlign:'center',
        backgroundColor:'rgba(252, 177, 193, .9)',
        color:'rgb(99,99,99)',
        }}
      >
        <Grid columns={2} stackable celled='internally' >
          <Grid.Row>
            <Grid.Column>
              <h1 style={{fontFamily:'marcellus', paddingTop:'40px'}}>Education</h1>
              <Icon  name="graduation" size="huge" style={{color:'rgb(99,99,99)'}}></Icon>
            </Grid.Column>
            <Grid.Column style={{
              padding:'10px',
              fontFamily:'marcellus',
              fontSize:'20px',
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
      </Segment>

    </div>
  )
}
export default about;
