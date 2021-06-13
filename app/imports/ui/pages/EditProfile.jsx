import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Loader, Header, Segment, Grid } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, HiddenField, SubmitField, TextField } from 'uniforms-semantic';
import { UserInfos } from '../../api/userinfo/UserInfo';
import SideNavBar from '../components/SideNavBar';

class EditProfile extends React.Component {
  submit(data) {
    const { firstName, lastName, userImage, _id } = data;
    UserInfos.update(_id, { $set: { firstName, lastName, userImage } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting profile data</Loader>;
  }

  renderPage() {
    const bridge = new SimpleSchema2Bridge(UserInfos.getSchema());
    return (
      <Grid container centered>
        <SideNavBar/>
        <Grid.Column>
          <Header as="h2" textAlign="center">Edit Profile</Header>
          <AutoForm schema={bridge} onSubmit={data => {
            // eslint-disable-next-line no-undef,no-alert
            if (window.confirm('Are you sure you wish to save your changes?')) this.submit(data);
          }} model={this.props.doc}>
            <Segment>
              <TextField name='firstName' />
              <TextField name='lastName' />
              <TextField name='image' />
              <SubmitField value='Submit Changes' />
              <ErrorsField />
              <HiddenField name='_id' />
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

EditProfile.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(({ match }) => {
  const subscription = UserInfos.subscribeUserInfo();
  const documentID = match.params._id;
  const doc = UserInfos.findOne(documentID);
  const ready = subscription.ready();
  return {
    doc,
    ready,
  };
})(EditProfile);
