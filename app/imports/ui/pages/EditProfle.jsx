import React from 'react';
import { Loader, Container, Header, Grid, Image, Segment } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, HiddenField, SubmitField, TextField } from 'uniforms-semantic';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { userInfoUpdateMethod } from '../../api/userinfo/UserInfoCollection.methods';
import { UserInfos } from '../../api/userinfo/UserInfo';
import SideNavBar from '../components/SideNavBar';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userImage: 'no-change',
    };
  }

  submit(data) {
    const { firstName, lastName, _id, password } = data;
    let userImage;
    if (this.state.userImage === 'no=change') {
      userImage = this.props.doc.userImage;
    } else {
      userImage = this.state.userImage;
    }
    const updateData = {
      id: _id, firstName, lastName, userImage, password,
    };

    userInfoUpdateMethod.call(updateData, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'UserInfo updated Successfully', 'success')));
  }

  submitImage = (event) => {
    const edit = this;
    event.preventDefault();
    const files = event.target.files;
    if (files) {
      /* global FileReader */
      const reader = new FileReader();
      reader.addEventListener('load', function () {
        const fileSize = files[0].size / 1000 / 1000;
        if (fileSize > 2) {
          swal('Error', 'This image is too big cannot exceed 2MB', 'error');
        } else {
          edit.setState({ userImage: this.result });
        }
      });
      reader.readAsDataURL(files[0]);
    }
  };

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const bridge = new SimpleSchema2Bridge(UserInfos.getSchema());
    const pageStyle = {
      paddingLeft: '15em',
      paddingTop: '6em',
      minHeight: '110vh',
    };
    let dataImage = this.state.userImage;
    if (this.state.userImage === 'no-change') {
      dataImage = this.props.doc.userImage;
    }
    return (
      <div style={{
        background: '#FF6961',
        backgroundSize: 'cover',
      }}>
        <SideNavBar/>
        <Container style={pageStyle}>
          <Header inverted as = "h2" style = {{ fontFamily: 'sans-serif', fontWeight: 'lighter' }} textAlign="center">Edit Profile</Header>
          <Grid>
            <Grid.Row style={{ marginTop: '3em' }}>
              <Grid.Column width={5}>
                <Image size = 'massive' style= {{ borderRadius: '5%' }} src={dataImage} centered/>
                <div style={{ color: 'black' }}>
                  <label style={{ cursor: 'pointer', color: 'aliceblue' }} htmlFor="file-input">
                      Choose Your Photo here
                  </label>
                </div>
                <input type="file"
                  id="file-input"
                  name="picture"
                  accept=".jpg, .jpeg, .png"
                  style={{ display: 'none' }}
                  onChange={this.submitImage}/>
              </Grid.Column>
              <Grid.Column stretched width={11}>
                <AutoForm
                  schema={bridge}
                  onSubmit={data => {
                    // eslint-disable-next-line no-undef,no-alert
                    if (window.confirm('Are you sure you wish to save your changes?')) this.submit(data);
                  }} model={this.props.doc}>
                  <Segment>
                    <TextField name={'firstName'}/>
                    <TextField name={'lastName'}/>
                    <TextField name={'password'}/>
                    <SubmitField style={{ background: 'green', color: 'black' }} value='Update' id='update-form-submit'/>
                    <ErrorsField/>
                    <HiddenField name='id'/>
                  </Segment>
                </AutoForm>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
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
  const documentId = match.params._id;
  const doc = UserInfos.findOne(documentId);
  const ready = subscription.ready();
  return {
    doc,
    ready,
  };
})(EditProfile);
