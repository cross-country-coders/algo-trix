import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Container, Card, Button } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { UserInfos } from '../../api/userinfo/UserInfo';

/** A simple static component to render some text for the landing page. */
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header as = 'h1' textAlign='center'>WELCOME </Header>
        <Container text textAlign='center'>
          <p>We all know algorithm is a difficult subject. Let AlgoTrix help you out.</p>
        </Container>
        <Header as = 'h1' textAlign='center'>PreReq Materials</Header>
        <Container textAlign="center">
          <p> Some of the prereq materials you should review before taking Algorithms course.</p>
          <Card.Group centered itemsPerRow = {4}>
            <Card>
              <Card.Content>
                <Card.Header>Sorting Algorithms</Card.Header>
                <Card.Description>Review on the different sorting algorithms.</Card.Description>
                <Card.Content extra>
                  <Button>CLICK</Button>
                </Card.Content>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Proof Methods</Card.Header>
                <Card.Description>Review on the different sorting algorithms.</Card.Description>
                <Card.Content extra>
                  <Button>CLICK</Button>
                </Card.Content>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
      </div>
    );
  }
}

HomePage.propTypes = {
  ready: PropTypes.bool.isRequired,
  profiles: PropTypes.object,
  currentUser: PropTypes.string,
  currentId: PropTypes.string,
};
export default withTracker(({ match }) => {
  const userID = Meteor.userId();
  const sub1 = UserInfos.subscribeUserInfo();
  const userAccount = Meteor.users.findOne({ _id: userID });
  const profiles = UserInfos.findOne({ owner: userAccount?.username });
  return {
    profiles,
    currentUser: Meteor.user() ? Meteor.user().username : '',
    currentId: match.params._id,
    ready: sub1.ready(),
  };
})(HomePage);
