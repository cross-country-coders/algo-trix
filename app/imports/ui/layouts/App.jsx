import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import Landing from '../pages/Landing';
import HomePage from '../pages/HomePage';
import Signout from '../pages/Signout';
import UserProfile from '../pages/UserProfile';
import AdminListUsers from '../pages/AdminListUsers';
import ProofMethod from '../pages/lessons/prereq/ProofMethod';
import Sort from '../pages/lessons/prereq/Sort';
import Graph from '../pages/lessons/graph/Graph';
import Contact from '../pages/Contact';
import Runtime from '../pages/lessons/prereq/Runtime';
import Stack from '../pages/lessons/prereq/Stack';
import MST from '../pages/lessons/graph/MST';
import SinglePath from '../pages/lessons/graph/SinglePath';
import AllShortPath from '../pages/lessons/graph/AllShortPath';
import MaxFlow from '../pages/lessons/graph/MaxFlow';
import RedBlack from '../pages/lessons/graph/RedBlack';
import Binary from '../pages/lessons/graph/Binary';
/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <SideNavBar />
          <Switch>
            <Route path="/signout" component={Signout}/>
            <ProtectedRoute path="/home" component={HomePage}/>
            <ProtectedRoute path="/profile" component={UserProfile}/>
            <ProtectedRoute path="/proof" component={ProofMethod}/>
            <ProtectedRoute path="/sort" component={Sort}/>
            <ProtectedRoute path="/graph" component={Graph}/>
            <ProtectedRoute path="/contact" component={Contact}/>
            <ProtectedRoute path="/stack" component={Stack}/>
            <ProtectedRoute path="/runtime" component={Runtime} />
            <ProtectedRoute path="/single" component={SinglePath} />
            <ProtectedRoute path="/mst" component={MST} />
            <ProtectedRoute path="/max" component={MaxFlow} />
            <ProtectedRoute path="/allshort" component={AllShortPath} />
            <ProtectedRoute path="/red-black" component={RedBlack} />
            <ProtectedRoute path="/binary" component={Binary} />
            <AdminProtectedRoute path="/listusers" component={AdminListUsers}/>
            <Route component={Landing}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
        );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
      return (isLogged && isAdmin) ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
        );
    }}
  />
);

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

export default App;
