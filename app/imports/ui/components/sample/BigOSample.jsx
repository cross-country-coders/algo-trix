import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

class BigOSample extends React.Component {
  render() {
    return (
      <Segment>
        <Header as ='h4' textAlign='left'>TRUE OR FALSE</Header>
        <b>Determine whether the runtime is true or not?</b>
        <ol>
          <li>By master method the solution to the recurrence T(n) = 3T(n/3) + log(n) is &theta(n log n) </li>
          <div className="center"> TRUE OR FALSE </div>
        </ol>
      </Segment>
    );
  }
}

export default BigOSample;
