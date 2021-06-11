import React from 'react';
import PropTypes from 'prop-types';
import SimpleSchema from 'simpl-schema';
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-semantic';
import { Button, Form, Image, Message, Modal } from 'semantic-ui-react';
import { UserInfos } from '../../api/userinfo/UserInfo';

const updateBridge = new SimpleSchema2Bridge(new SimpleSchema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  userImage: { type: String, optional: true,
    defaultValue: 'https://pbs.twimg.com/profile_images/1366835403840389121/j3p8UTbo_400x400.jpg' },
}));

class UpdateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: '', redirectToReferer: false, open: false, dimmer: undefined };
  }

  updateSubmit(data) {
    const { password, firstName, lastName, userImage, email } = data;
    if (this.props.profile.password !== password) {
      // TODO: password change with the meteor call. Remove disabled from the password field once implemented
    }
    UserInfos.update(email, { firstName, lastName, password, userImage });
    this.setState({ open: false });
  }

  updateForm() {
    return (
      <>
        <AutoForm schema={updateBridge} model={this.props.profile} onSubmit={data => this.updateSubmit(data)}
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

  render() {
    return (
      <Modal
        onClose={() => this.setState({ open: false })}
        onOpen={() => this.setState({ open: true })}
        open={this.state.open}
        dimmer={'blurring'}
        trigger={<Button circular icon='settings' size='medium' color='blue' className='editButtonProfile'
          style={{ position: 'absolute', width: '28%', top: '18.8em', left: '11.5em' }} />}>
        <Modal.Header>Update Profile Information</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src={this.props.profile.userImage} />
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
}

UpdateProfile.propTypes = {
  profile: PropTypes.object,
};

export default UpdateProfile;
