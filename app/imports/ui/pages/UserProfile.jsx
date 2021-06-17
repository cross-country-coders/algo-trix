import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Loader, Container, Image, Header, Segment, Grid, Form, Button, Modal, Message } from 'semantic-ui-react';
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-semantic';
import { UserInfos } from '../../api/userinfo/UserInfo';

const updateBridge = new SimpleSchema2Bridge(new SimpleSchema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  userImage: { type: String, optional: true,
    defaultValue: 'https://pbs.twimg.com/profile_images/1366835403840389121/j3p8UTbo_400x400.jpg' },
}));

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: '', redirectToReferer: false, open: false, dimmer: undefined };
  }

  updateSubmit(data) {
    const { password, firstName, lastName, userImage, email } = data;
    if (this.props.profiles.password !== password) {
      // TODO: password change with the meteor call. Remove disabled from the password field once implemented
    }
    UserInfos.update(email, { firstName, lastName, password, userImage });
    this.setState({ open: false });
  }

  updateForm() {
    return (
      <>
        <AutoForm schema={updateBridge} model={this.props.profiles} onSubmit={data => this.updateSubmit(data)}
          onChangeModel={model => this.setState({ preview: model.userImage })}>
          <Form.Group widths='equal'>
            <TextField name='firstName' placeholder='Your first name' grid='equal'/>
            <TextField name='lastName' placeholder='Your last name' grid='equal'/>
          </Form.Group>
          <TextField name='userImage' placeholder='Your profile picture link' iconLeft='file image'/>
          <TextField name='email' placeholder='E-mail address' iconLeft='user' disabled/>
          <TextField name='password' type='password' placeholder='Password' iconLeft='lock' disabled/>
          <SubmitField style={{ color: 'white', backgroundColor: '#e74c3c' }} value='Save'/>
          <ErrorsField/>
        </AutoForm>
      </>
    );
  }

  modalPopup() {
    return (
      <Modal
        onClose={() => this.setState({ open: false })}
        onOpen={() => this.setState({ open: true })}
        open={this.state.open}
        dimmer={'blurring'}>
        <Modal.Header>Update Profile Information</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src={this.props.profiles.userImage} />
          <Modal.Description>{this.updateForm()}</Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          {this.state.error === '' ? ('') : (
            <Message error header="Update profile failed" content={this.state.error} />
          )}
        </Modal.Actions>
      </Modal>
    );
  }

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
        {this.modalPopup()}
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
                        <Button circular icon='settings' size='medium' className='editButtonProfile jello-horizontal2' color='blue'
                          style={{ position: 'absolute', width: '15%', top: '4%', left: '80%' }}
                          onClick={() => this.setState({ open: true })}/>
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
