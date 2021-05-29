import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header, Sticky } from 'semantic-ui-react';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class LandingNavBar extends React.Component {
  render() {
    return (
      <Sticky>
        <Menu attached="top" inverted color='red' size='large' borderless>
          <Menu.Item>
            <Header inverted as='h1'>Algo-Trix</Header>
          </Menu.Item>
          <Menu.Item position="right">
            <Dropdown id="login-dropdown" text="Login" pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item id="login-dropdown-sign-in" icon="user" text="Sign In" as={NavLink} exact to="/signin" />
                <Dropdown.Item id="login-dropdown-sign-up" icon="add user" text="Sign Up" as={NavLink} exact to="/signup" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </Sticky>
    );
  }
}

// Declare the types of all properties.
LandingNavBar.propTypes = {
  currentUser: PropTypes.string,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
const LandingNavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(LandingNavBar);

// Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter
export default withRouter(LandingNavBarContainer);
