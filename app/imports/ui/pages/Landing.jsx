import React from 'react';
import { Header, Grid, Icon, Button, Image, Menu, Sticky, Form, Message, Modal } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { NavLink, Redirect } from 'react-router-dom';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-semantic';
import { Accounts } from 'meteor/accounts-base';
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
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

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: '', redirectToReferer: false, open: false, dimmer: undefined, signIn: true };
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

    const pageState = this.state.signIn;

    return (
      <div>
        <Modal
          onClose={() => this.setState({ open: false })}
          onOpen={() => this.setState({ open: true })}
          open={this.state.open}
          dimmer='blurring'>
          <Modal.Header>
            <Button fluid color='orange' onClick={() => this.setState({ signIn: !this.state.signIn })}>
              {(pageState) ? 'No Account? Register Today' : 'Got an Account? Login Now'}
            </Button>
          </Modal.Header>
          <Modal.Content>
            {(pageState) ? this.signinPage() : this.signupPage()}
          </Modal.Content>
        </Modal>

        <Sticky>
          <Menu attached="top" inverted color='red' size='large' borderless>
            <Menu.Item>
              <Header inverted as='h1'>Algo-Trix</Header>
            </Menu.Item>
            <Menu.Item position="right">
              <Button id="login-dropdown" pointing="top right" onClick={() => this.setState({ open: true })}>
                Login / Register
              </Button>
            </Menu.Item>
          </Menu>
        </Sticky>

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
                <NavLink exact to='/'>
                  <Icon name='user plus' size='massive' onClick={() => this.setState({ open: true, signIn: false })}/>
                </NavLink>
              </Grid.Column>
              <Grid.Column>
                <Header as='h2' inverted textAlign='center'> RETURNING TO Algo-Trix</Header>
                <p>Sign Back In.</p>
                <NavLink exact to='/'>
                  <Icon name='user' size='massive' onClick={() => this.setState({ open: true, signIn: true })}/>
                </NavLink>
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
