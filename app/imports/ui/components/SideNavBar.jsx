import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink, useLocation } from 'react-router-dom';
import { Menu, Button, Header, Icon, IconGroup, Image, Dropdown, Sidebar } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';
import 'react-pro-sidebar/dist/css/styles.css';
import SignOutConfirmation from './SignOutConfirmation';
// import 'app/client/index.css';

/*
function CurrentPage() {
  const location = useLocation();
  console.log(location.pathname);
  return <span>Path : {location.pathname}</span>;
}
*/

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class SideNavBar extends React.Component {
  state = {
    visible: false,
    visible2: false,
  }

  handleShowClick = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  }

  handleShowClick2 = () => {
    this.setState((prevState) => ({
      visible2: !prevState.visible2,
    }));
  }

  render() {
    const { visible } = this.state;
    // const font = "'Geo', sans-serif";
    /*    const menuStyle = {
      height: '100%', /!* Full-height: remove this if you want "auto" height *!/
      width: 'auto', /!* Set the width of the sidebar *!/
      position: 'fixed', /!* Fixed Sidebar (stay in place on scroll) *!/
      zIndex: '1', /!* Stay on top *!/
      top: '0', /!* Stay at the top *!/
      left: '0',
      /!* overflowX: 'hidden', /!* Disable horizontal scroll *!/ *!/
      paddingTop: '20px',
    }; */
    return (
      <div>
        <Button style={{ position: 'fixed', zIndex: 1, top: 0 }} attached={'right'} icon color='grey' disabled={false} onClick={this.handleShowClick}>
          <Icon name='bars'/>
        </Button>
        <Sidebar
          as={Menu}
          animation='push'
          direction='left'
          icon='labeled'
          inverted
          vertical
          visible={visible}
          width='thin'
          color='grey'
          style={{ height: '100vh', minHeight: '100vh' }}
        >
          <Button fluid style={{ zIndex: 2 }} icon color='grey' disabled={false} onClick={this.handleShowClick}>
            <Icon name='bars'/>
          </Button>
          {this.props.currentUser ? (
            [<Menu.Item as={NavLink} exact to="/add" key='add'>Add Stuff</Menu.Item>,
              <Menu.Item as={NavLink} exact to="/list" key='list'>List Stuff</Menu.Item>]
          ) : ''}
          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
            <Menu.Item as={NavLink} exact to="/admin" key='admin'>Admin</Menu.Item>
          ) : ''}
          <Menu.Item style={{ floated: 'left', width: '100%' }} id="navbar-home"
            as={NavLink} exact to="/#">
            <IconGroup>
              <Icon name='home'/>
              Home
            </IconGroup>
          </Menu.Item>

          <Menu.Item style={{ width: '100%' }} id="navbar-Prereq"
            as={NavLink} exact to="">
            <IconGroup>
              <Icon name='pencil square'/>
              Prereq Materials
            </IconGroup>
          </Menu.Item>

          <Menu.Item style={{ width: '100%' }} id="navbar-Contact"
            as={NavLink} exact to="">
            <IconGroup>
              <Icon name='mail'/>
              Contact Admin
            </IconGroup>
          </Menu.Item>

          <Menu.Item style={{ width: '100%' }} id="navbar-Admin"
            as={NavLink} exact to="">
            <IconGroup>
              <Icon name='cog'/>
              Admin
            </IconGroup>
          </Menu.Item>

          <Menu.Item style={{ width: '100%' }} id="navbar-UserList"
            as={NavLink} exact to="">
            <IconGroup>
              <Icon name='list'/>
              User List
            </IconGroup>
          </Menu.Item>

          <Menu.Item style={{ width: '100%' }} id="navbar-UserCount"
            as={NavLink} exact to="">
            <IconGroup>
              <Icon name='sort numeric up'/>
              User Count
            </IconGroup>
          </Menu.Item>

          <SignOutConfirmation id="navbar-sign-out" as={NavLink} exact to="/signout" style={{ padding: 0, margin: 0 }}/>
        </Sidebar>
      </div>

    /* <Menu pointing secondary vertical style={menuStyle} attached="top" borderless inverted>
        <Menu.Item as={NavLink} activeClassName="" exact to="/">
          <Header inverted as='h1'>meteor-application-template</Header>
        </Menu.Item>
        {this.props.currentUser ? (
          [<Menu.Item as={NavLink} activeClassName="active" exact to="/add" key='add'>Add Stuff</Menu.Item>,
            <Menu.Item as={NavLink} activeClassName="active" exact to="/list" key='list'>List Stuff</Menu.Item>]
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Menu.Item as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin</Menu.Item>
        ) : ''}
        <Menu.Item position="right">
          {this.props.currentUser === '' ? (
            <Dropdown id="login-dropdown" text="Login" pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item id="login-dropdown-sign-in" icon="user" text="Sign In" as={NavLink} exact
                  to="/signin"/>
                <Dropdown.Item id="login-dropdown-sign-up" icon="add user" text="Sign Up" as={NavLink} exact
                  to="/signup"/>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Dropdown id="navbar-current-user" text={this.props.currentUser} pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item id="navbar-sign-out" icon="sign out" text="Sign Out" as={NavLink} exact
                  to="/signout"/>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Menu.Item>
      </Menu> */
    );
  }
}

// Declare the types of all properties.
SideNavBar.propTypes = {
  currentUser: PropTypes.string,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(SideNavBar);

// Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter
export default withRouter(NavBarContainer);
