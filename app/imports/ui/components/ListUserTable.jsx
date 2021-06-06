import React from 'react';
import { Table, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class ListUserTable extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.profile.firstName}</Table.Cell>
        <Table.Cell>{this.props.profile.lastName}</Table.Cell>
        <Table.Cell>{this.props.profile._id}</Table.Cell>
        <Table.Cell><Image src = {this.props.profile.userImage} size = "small"/></Table.Cell>
      </Table.Row>
    );
  }
}

ListUserTable.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default withRouter(ListUserTable);
