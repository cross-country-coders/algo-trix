import React from 'react';
import { Header, Grid, Icon, Button, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import LandingNavBar from '../components/nvabars/LandingNavBar';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div>
        <LandingNavBar />
        <div className="landing-header-background" />
        <div className='landing-bg-text'><Image src='images/algotrix.png' centered/><br />
          <h2> Your friend to pass Algorithm (Gate Way Keeper)
          </h2></div>
        <div className='red'>
          <Header as='h1' inverted textAlign='center'>Welcome to Algo-Trix</Header>
          <br />
          <Grid columns={3} textAlign='center'>
            <Grid.Column>
              <Header as='h2' inverted textAlign='center'>Notes and Study Tips</Header>
              <p> Need some tips on how to study.</p>
              <Icon name='sticky note outline' size='massive' />
            </Grid.Column>
            <Grid.Column>
              <Header as='h2' inverted textAlign='center'>Practice Problems and Solutions</Header>
              <p> Want practice outside a book.</p>
              <Icon name='pencil square' size='massive' />
            </Grid.Column>
            <Grid.Column>
              <Header as='h2' inverted textAlign='center'>Find The Best YouTube videos</Header>
              <p> Want to know which videos watch.</p>
              <Icon name='video' size='massive' />
            </Grid.Column>
          </Grid>
          <br />
        </div>
        <div className="black">
          <br />
          <div className="black-landing-item">
            <Header as='h1' inverted textAlign='center'> ACCOUNTS</Header>
            <Grid columns={2} textAlign='center'>
              <Grid.Column>
                <Header as='h2' inverted textAlign='center'> NEW TO Algo-Trix</Header>
                <p>Create an Account.</p>
                <NavLink exact to="/signup"><Icon name='user plus' size='massive' /></NavLink>
              </Grid.Column>
              <Grid.Column>
                <Header as='h2' inverted textAlign='center'> RETURNING TO Algo-Trix</Header>
                <p>Sign Back In.</p>
                <NavLink exact to="/signin"><Icon name='user plus' size='massive' /></NavLink>
              </Grid.Column>
            </Grid>
            <br />
          </div>
          <div className='red'>
            <br />
            <Header as='h5' inverted textAlign='center'>CREATED FOR ICS 427</Header>
            <Grid columns={3} textAlign='center'>
              <Grid.Column><Header as='h5' inverted textAlign='center'>Cross-Country-Coders Team</Header>
                <ul>
                  <li> Jerome Gallego</li>
                  <li> Christian Jensen</li>
                  <li> Shin Saito</li>
                  <li> Jun Miao</li>
                </ul>
              </Grid.Column>
              <Grid.Column>
                <Header as='h5' inverted textAlign='center'>Related Links</Header>
                <Button as='a' href='https://cross-country-coders.github.io/' color='github'>
                  <Icon name='github' />GitHub Repository Page
                </Button>
                <br />
                <br />
                <Button as='a' href='https://cross-country-coders.github.io/' color='blue'>
                  <Icon name='github' />Cross Country Coders
                </Button>
              </Grid.Column>
              <Grid.Column>
                  Created as a class project and is not associated with any actual project research group.
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
