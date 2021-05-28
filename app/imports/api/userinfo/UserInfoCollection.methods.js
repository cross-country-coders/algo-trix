import React from 'react';
import SimpleSchema from 'simpl-schema';
import PropTypes from 'prop-types';
import { Redirect, NavLink } from 'react-router-dom';
import { Button, Container, Grid, Header, Message, Segment, Form } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-semantic';
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import { UserInfos } from './UserInfo';

const formSchema = new SimpleSchema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  image: { type: String, optional: true, defaultValue: '' },
});

const formBridge = new SimpleSchema2Bridge(formSchema);

/**
 * Signup component is similar to signin component, but we create a new user instead.
 */
class Signup extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = { error: '', redirectToReferer: false };
  }

  /** Handle Signup submission. Create user account and a profile entry, then redirect to the home page. */
  submit(data, formRef) {
    const { email, password, firstName, lastName, image } = data;
    Accounts.createUser({ email, username: email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        formRef.reset();
        UserInfos.define({ firstName: firstName, lastName:
          lastName, owner: email, password: password, userImage: image });
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  /** Display the signup form. Redirect to add page after successful registration and login. */
  render() {
    let fRef = null;
    const { from } = this.props.location.state || { from: { pathname: '/joinclub' } };
    // if correct authentication, redirect to from: page instead of signup screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }
    return (
      <Container id="signin-page" style={{ marginTop: '5em', paddingBottom: '5em' }}>
        <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
          <Grid.Column>
            <Segment.Group piled>
              <Segment>
                <Button as={NavLink} fluid color='orange' exact to='/signin'>Got an Account? Login Now</Button>
              </Segment>
              <Segment>
                <AutoForm ref={ref => {
                  fRef = ref;
                }} schema={formBridge} onSubmit={data => this.submit(data, fRef)}>
                  <Header as="h1" textAlign="left">Register</Header>
                  <TextField name='image' placeholder='Profile Picture Link' iconLeft='image'/>
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
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

/** Ensure that the React Router location object is available in case we need to redirect. */
Signup.propTypes = {
  location: PropTypes.object,
};

export default Signup;
