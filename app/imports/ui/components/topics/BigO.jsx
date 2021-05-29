import React from 'react';
import { Container, Header, Segment, Menu, Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import BigOSample from '../sample/BigOSample';

class BigO extends React.Component {
  render() {
    const sampleProblem = [
      {
        menuItem: <Menu.Item key = 'ex1'>TRUE or FALSE</Menu.Item>,
        render: () => (<BigOSample/>),
      },
    ];

    return (
      <Container>
        <Header as ='h2' textAlign='centered'>Asymptotic Runtime</Header>
        <Segment>
          <Header as='h4'>Analysis of Algorithm requires</Header>
          <ol>
            <li>identifying what aspect (runtime, use of space, or other attributes) of an algorithm we care about </li>
            <li>Identifying a function that categorizes the runtime</li>
            <li> Identifying the functions that the runtime belongs to</li>
          </ol>
        </Segment>
        <Header as = 'h4' textAlign='centered'>Example Problems</Header>
        <Tab panes={sampleProblem}/>
      </Container>
    );
  }
}
export default (BigO);
