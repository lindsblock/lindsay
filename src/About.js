import React from 'react';
import {Grid, Icon, Header, Container } from 'semantic-ui-react';

const about = () => {
  return(
    <div style={{textAlign:'center'}} >
      <h1 className="headers">About</h1>
      <div style={{backgroundColor: 'rgb(246, 245, 245, .9)', fontFamily:'marcellus'}}>
                <Header textAlign="center" style={{fontFamily:'marcellus', fontSize:'30px'}}>Skills</Header>
                <Grid columns={3} stackable celled='internally' verticalAlign='middle' textAlign="center" style={{fontSize:'30px'}}>
                  <Grid.Row>
                   <Grid.Column >
                     <Icon name='js' size='large' style={{color: 'rgb(114, 166, 96)'}}/>
                     <p>JavaScript/ES6</p>
                   </Grid.Column>
                   <Grid.Column >
                     <Icon name='gem' size='large' style={{color: 'rgb(114, 166, 96)'}} />
                     <p>Ruby/Ruby on Rails</p>
                   </Grid.Column>
                   <Grid.Column >
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
                     <p>Semantic, Materialize, Bootatrap</p>
                   </Grid.Column>
                   <Grid.Column>
                     <Icon name='database' size='large' style={{color: 'rgb(114, 166, 96)'}}/>
                     <p>PostgreSQL</p>
                   </Grid.Column>
                 </Grid.Row>
                </Grid>
              </div>
              <container style={{itemsAlign:'center'}}>
                <Grid columns="equal" container divided stackable verticalAlign='middle' style={{margin:'auto'}}>
                  <Grid.Row>
                    <Grid.Column textAlign="center" >
                      <Header as="h2" style={{fontFamily:'Marcellus', fontSize: '30px'}}>Education</Header>
                      <Icon centered name="graduation" size="large"></Icon>
                    </Grid.Column>
                    <Grid.Column >
                      <Container style={{padding:'10px', fontSize: '20px', fontFamily: 'marcellus'}} >
                        <strong>DevPoint Labs</strong>
                        <p>2018 - Web Development Certification</p>
                        <strong>Continuing Ed- Udemy</strong>
                        <p>2018- React 16- The Complete Guide Online Course</p>
                        <strong>SLCC</strong>
                        <p>2015 - Associate's Degree in General Education </p>
                      </Container>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </container>
    </div>
  )
}
const styles = {
  pageHeaders: {
    fontFamily: 'Tangerine',
    fontSize: '100px',
    marginRight: '20px',
    paddingTop: '10px',
  }
}

export default about;
