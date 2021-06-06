import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Button, Header, Message, Modal, Form } from 'semantic-ui-react';
import SimpleSchema from 'simpl-schema';
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-semantic';
import { Accounts } from 'meteor/accounts-base';
import { UserInfos } from '../../api/userinfo/UserInfo';

const signinBridge = new SimpleSchema2Bridge(new SimpleSchema({
  email: String,
  password: String,
}));

const signupBridge = new SimpleSchema2Bridge(new SimpleSchema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  image: { type: String, optional: true, defaultValue: '' },
}));

class SignInAndUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: '', redirectToReferer: false, open: false, dimmer: undefined, mode: '' };
  }

  toggle(state) {
    this.setState({ mode: (state === 'signin') ? 'signup' : 'signin', error: '' });
  }

    signinSubmit = (data, formRef) => {
      const { email, password } = data;
      Meteor.loginWithPassword(email, password, (err) => {
        if (err) {
          this.setState({ error: err.reason });
        } else {
          formRef.reset();
          this.setState({ error: '', redirectToReferer: true, open: false });
        }
      });
    }

    signupSubmit(data, formRef) {
      const { email, password, firstName, lastName, image } = data;
      Accounts.createUser({ email, username: email, password }, (err) => {
        if (err) {
          this.setState({ error: err.reason });
        } else {
          formRef.reset();
          UserInfos.define({
            firstName: firstName, lastName:
                    lastName, owner: email, password: password, userImage: image,
          });
          this.setState({ error: '', redirectToReferer: true, open: false });
        }
      });
    }

    signupPage() {
      let fRef = null;

      return (
        <>
          <AutoForm ref={ref => {
            fRef = ref;
          }} schema={signupBridge} onSubmit={data => this.signupSubmit(data, fRef)}>
            <Header as="h1" textAlign="left">Register</Header>
            <Form.Group widths='equal'>
              <TextField name='firstName' placeholder='Your first name' grid='equal'/>
              <TextField name='lastName' placeholder='Your last name' grid='equal'/>
            </Form.Group>
            <TextField name='email' placeholder='E-mail address' iconLeft='user'/>
            <TextField name='password' type='password' placeholder='Password' iconLeft='lock'/>
            <SubmitField style={{ color: 'white', backgroundColor: '#e74c3c' }} value='Register'/>
            <ErrorsField/>
          </AutoForm>
          {this.state.error === '' ? ('') : (
            <Message error header="Registration failed" content={this.state.error} />
          )}
        </>
      );
    }

    signinPage() {
      let fRef = null;

      return (
        <>
          <AutoForm ref={ref => {
            fRef = ref;
          }} schema={signinBridge} onSubmit={data => this.signinSubmit(data, fRef)}>
            <Header as="h1" textAlign="left">Login</Header>
            <TextField name='email' placeholder='E-mail address' iconLeft='user'/>
            <TextField name='password' type='password' placeholder='Password' iconLeft='lock'/>
            <SubmitField style={{ color: 'white', backgroundColor: '#e74c3c' }} value='Login'/>
            <ErrorsField/>
          </AutoForm>
          {this.state.error === '' ? ('') : (
            <Message error header="Login failed" content={this.state.error} />
          )}
        </>
      );
    }

    render() {
      const { from } = { from: { pathname: '/home' } };
      // if correct authentication, redirect to home screen
      if (this.state.redirectToReferer) {
        return <Redirect to={from}/>;
      }

      const pageState = this.state.mode;

      if (pageState === '') {
        this.setState({ mode: this.props.mode });
      }

      return (
        <Modal
          onClose={() => this.setState({ open: false })}
          onOpen={() => this.setState({ open: true })}
          open={this.state.open}
          dimmer={'blurring'}
          trigger={<Button id="login-dropdown" text="Login" pointing="top right" icon={'user'} />}>
          <Modal.Header>
            <Button fluid color='orange' onClick={() => this.toggle(pageState)}>
              {(pageState === 'signin') ? 'No Account? Register Today' : 'Got an Account? Login Now'}
            </Button>
          </Modal.Header>
          <Modal.Content>
            {(pageState === 'signin') ? this.signinPage() : this.signupPage()}
          </Modal.Content>
        </Modal>
      );
    }
}

/** Ensure that the React Router location object is available in case we need to redirect. */
SignInAndUp.propTypes = {
  mode: PropTypes.string,
};

export default SignInAndUp;
