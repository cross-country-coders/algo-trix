import React from 'react';
import { Container, Table, Header, Loader, Label, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { UserInfos } from '../../api/userinfo/UserInfo';
import ListUserTable from '../components/ListUserTable';

class AdminListUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
  }

  /** Updates the controls everytime a button is pressed */
  handleInputChange = (e, data) => {
    this.setState({
      activePage: Number(data.activePage),
    });
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <div
      className={'loaderStyle'}>
      <Loader active inverted>Getting data</Loader>
    </div>;
  }

  renderPage() {
    /** Constant variable to start at index 0 */
    const startIndex = (this.state.activePage * 25 - 25);

    /** Variable that holds the index of the last item */
    const endIndex = (this.state.activePage * 25);

    return (
      <div>
        <div className="red">
          <Header as = "h1" textAlign="center" inverted>
            User List <Label color='orange'><Icon name='user'/>{this.props.profiles.length}</Label>
          </Header>
        </div>
        <Container>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell> Email </Table.HeaderCell>
                <Table.HeaderCell> User Profile </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.profiles.map(profile => <ListUserTable key={profile._id} profile = {profile}/>).slice(startIndex, endIndex)}
            </Table.Body>
          </Table>
        </Container>
      </div>
    );
  }
}

AdminListUsers.propTypes = {
  profiles: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = UserInfos.subscribeUserInfoAdmin();
  return {
    profiles: UserInfos.find({}).fetch(),
    ready: subscription.ready(),
  };
})(AdminListUsers);
