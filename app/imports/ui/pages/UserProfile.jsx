import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Loader, Container, Image, Button, Header, Segment, Grid, Icon } from 'semantic-ui-react';
import { UserInfos } from '../../api/userinfo/UserInfo';
import { NavLink } from 'react-router-dom';

class UserProfile extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {

    const pageStyle = {
      paddingLeft: '17em',
      paddingTop: '1em',
      minHeight: '150vh',
    };

    return (
        <div style={{
          background: '#001947',
          backgroundSize: 'cover',

        }}>

          <Container style={pageStyle}>
            <Grid className={'profileGrid'}>

              <Grid.Row>
                <Grid.Column width={5}>

                  <div className={'jello-horizontal2'}>
                    <Image src={this.props.profiles.userImage}
                        // eslint-disable-next-line
                           style={{ borderRadius: '50%', width: '280px', height: '280px', top: '200px', left: '50px' }}
                    /></div>
                  <div className={'jello-horizontal2'}>
                  </div>
                </Grid.Column>

                <Grid.Column>
                  <div className={'growForProfile'} style={{ borderRadius: '100rem' }}>
                    <Segment className={'viewProfile jello-horizontal2'}
                             style={{
                               height: '370px',
                               width: '370px',
                               borderRadius: '100rem',
                               left: '42px',
                               top: '78px',
                             }}>
                      <div className={'infoCard'}>
                        <Header as='h1' inverted style={{ fontWeight: 'lighter' }}>
                          {this.props.profiles.firstName} {this.props.profiles.lastName}
                        </Header>

                        <Header as='h3' inverted style={{ fontFamily: 'sans-serif', fontWeight: 'lighter' }}>
                          <p>
                            Username: {this.props.profiles.owner}
                          </p>
                          <p>
                            Password:
                          </p>
                          <Button
                              as={NavLink}
                              exact to={`/change/${this.props.profiles._id}`}
                              animated='vertical'
                              size='medium'
                              style={{ position: 'absolute', width: '28%', top: '18.8em', left: '11.5em' }}
                              color='blue'
                              id='edit-password'
                              className={'editButtonProfile'}
                          >
                            <Button.Content hidden>Edit Password</Button.Content>
                            <Button.Content visible>
                              <Icon name='lock'/>
                            </Button.Content>
                          </Button>

                        </Header>
                      </div>
                    </Segment>
                  </div>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                  <div className={'growForProfile'} style={{ borderRadius: '100rem', height: '450px', width: '450px' }}>
                    <Segment className={'viewProfile jello-horizontal2 growForProfile'}
                             style={{
                               height: '600px',
                               width: '600px',
                               borderRadius: '100rem',
                               left: '82px',
                               top: '5em',
                             }}>

                    </Segment>
                  </div>
                </Grid.Column>
              </Grid.Row>

            </Grid>
          </Container>

        </div>

    );
  }
}

UserProfile.propTypes = {
  ready: PropTypes.bool.isRequired,
  profiles: PropTypes.object,
  currentUser: PropTypes.string,
  currentId: PropTypes.string,
};

export default withTracker(({ match }) => {
  const userID = Meteor.userId();
  const sub1 = UserInfos.subscribeUserInfo();
  const userAccount = Meteor.users.findOne({ _id: userID });
  const profiles = UserInfos.findOne({ owner: userAccount?.username });
  return {
    profiles,
    currentUser: Meteor.user() ? Meteor.user().username : '',
    currentId: match.params._id,
    ready: sub1.ready(),
  };
})(UserProfile);

