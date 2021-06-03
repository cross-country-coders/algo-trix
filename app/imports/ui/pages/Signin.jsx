import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Container, Button, Grid, Header, Message, Segment } from 'semantic-ui-react';
import SimpleSchema from 'simpl-schema';
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorField, SubmitField, TextField } from 'uniforms-semantic';

const formSchema = new SimpleSchema({
  email: String,
  password: String,
});

const formBridge = new SimpleSchema2Bridge(formSchema);

/**
 * Signin page overrides the form’s submit event and call Meteor’s loginWithPassword().
 * Authentication errors modify the component’s state to be displayed
 */
export default class Signin extends React.Component {

  // Initialize component state with properties for login and redirection.
  constructor(props) {
    super(props);
    this.state = { error: '', redirectToReferer: false };
  }

    // Handle Signin submission using Meteor's account mechanism.
    submit = (data, formRef) => {
      const { email, password } = data;
      Meteor.loginWithPassword(email, password, (err) => {
        if (err) {
          this.setState({ error: err.reason });
        } else {
          formRef.reset();
          this.setState({ error: '', redirectToReferer: true });
        }
      });
    }

    // Render the signin form.
    render() {
      let fRef = null;
      const { from } = this.props.location.state || { from: { pathname: '/home' } };
      // if correct authentication, redirect to page instead of login screen
      if (this.state.redirectToReferer) {
        return <Redirect to={from}/>;
      }
      // Otherwise return the Login form.
      return (
        <Container id="signin-page" style={{ marginTop: '5em', paddingBottom: '5em' }}>
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column>

              <Segment.Group piled>
                <Segment>
                  <Button as={NavLink} fluid color='orange' exact to='/signup'>No Account? Register Today</Button>
                </Segment>

                <Segment>
                  <AutoForm ref={ref => {
                    fRef = ref;
                  }} schema={formBridge} onSubmit={data => this.submit(data, fRef)}>
                    <Header as="h1" textAlign="left">Login</Header>
                    <TextField name='email' placeholder='E-mail address' iconLeft='user'/>
                    <ErrorField name='email'><span>Please enter your Email!</span></ErrorField>
                    <TextField name='password' type='password' placeholder='Password' iconLeft='lock'/>
                    <ErrorField name='password'><span>Password is missing!</span></ErrorField>
                    <SubmitField style={{ color: 'white', backgroundColor: '#e74c3c' }} value='Login'/>
                  </AutoForm>
                  {this.state.error === '' ? ('') : (
                    <Message error header="Login failed" content={this.state.error} />
                  )}
                </Segment>
              </Segment.Group>

            </Grid.Column>
          </Grid>
        </Container>
      );
    }
}

// Ensure that the React Router location object is available in case we need to redirect.
Signin.propTypes = {
  location: PropTypes.object,
};
