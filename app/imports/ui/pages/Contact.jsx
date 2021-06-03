import React from 'react';
import { Header, Grid, Icon, Button, Image, Segment } from 'semantic-ui-react';
import SideNavBar from '../components/SideNavBar';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <SideNavBar/>
        <div className="red">
          <Header as ="h2" textAlign='center'>Contact Admin</Header>
          <br/>
        </div>
        <Button> end to Admin</Button>
      </div>
    );
  }
} export default (Contact);
