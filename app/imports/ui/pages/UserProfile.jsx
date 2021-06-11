import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Loader, Container, Image, Header, Segment, Grid } from 'semantic-ui-react';
import { UserInfos } from '../../api/userinfo/UserInfo';
import SideNavBar from '../components/SideNavBar';
import UpdateProfile from '../components/UpdateProfile';

class UserProfile extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting profile data</Loader>;
  }

  renderPage() {

    const pageStyle = {
      paddingLeft: '17em',
      paddingTop: '1em',
      minHeight: '150vh',
    };

    return (
      <div style={{
        background: '#FF5148',
        backgroundSize: 'cover',
      }}>
        <SideNavBar/>
        <Container style={pageStyle}>
          <Grid className='profileGrid'>
            <Grid.Row>
              <Grid.Column width={5}>

                <div className='jello-horizontal2'>
                  <Image src={this.props.profiles.userImage}
                    style={{ borderRadius: '15px', width: '280px', height: '280px', top: '75px', left: '20px', objectFit: 'cover' }}
                    rounded/>
                </div>
                <div className='jello-horizontal2'>
                </div>
              </Grid.Column>

              <Grid.Column>
                <div className='growForProfile' style={{ borderRadius: '100rem' }}>
                  <Segment className='viewProfile jello-horizontal2'
                    style={{ height: '350px', width: '350px', borderRadius: '15px', left: '5px', top: '190px' }}>
                    <div className={'infoCard'}>
                      <Header as='h1' style={{ fontWeight: 'lighter' }}>
                        <h1>Hello!</h1>
                        {this.props.profiles.firstName} {this.props.profiles.lastName}
                      </Header>

                      <h2 style={{ fontFamily: 'sans-serif', fontWeight: 'lighter' }}>
                        <p>Email: {this.props.profiles._id}</p>
                        <p>Password: {'*'.repeat(this.props.profiles.password.length)}</p>
                      </h2>
                    </div>
                  </Segment>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <div className={'growForProfile'} style={{ borderRadius: '100rem', height: '250px', width: '250px' }}>
                  <Segment className='viewProfile jello-horizontal2 growForProfile'
                    style={{ height: '400px', width: '400px', borderRadius: '15px', left: '-105px', top: '25px' }}>
                    <div className={'infoCard'}>
                      <Header as='h1' style={{ fontWeight: 'lighter' }}>
                        <h1>My Progress</h1>
                      </Header>

                      <Header as='h3' style={{ fontFamily: 'sans-serif', fontWeight: 'lighter' }}>
                        <h3>
                            Progression:
                        </h3>
                        <p>Topics:</p>
                        <p>Videos watched:</p>
                        <p>Problems completed:</p>
                      </Header>

                    </div>
                  </Segment>
                </div>
              </Grid.Column>
            </Grid.Row>

          </Grid>
          <UpdateProfile profile={this.props.profiles}/>
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
  const profiles = UserInfos.findOne({ _id: userAccount?.username });
  return {
    profiles: profiles,
    currentUser: Meteor.user() ? Meteor.user().username : '',
    currentId: match.params._id,
    ready: sub1.ready(),
  };
})(UserProfile);
