import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Loader, Card, Image, Button, Header, Segment } from 'semantic-ui-react';
import { UserInfos } from '../../api/userinfo/UserInfo';

class UserProfile extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
      <Segment>
        <Header as='h2' textAlign='center'> Profile Page </Header>
        <Card centered>
          <Image src={this.props.profiles.userImage} />
          <Card.Content>
            <Card.Header textAlign='centered'>{this.props.profiles.firstName} {this.props.profiles.lastName}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            {this.props.profiles.email}
            <br />
            <Button>Click Here</Button>
          </Card.Content>
        </Card>
      </Segment>
    );
  }
}

UserProfile.propTypes = {
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
})(UserProfile);
