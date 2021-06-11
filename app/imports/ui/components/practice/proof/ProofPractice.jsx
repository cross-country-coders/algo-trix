import React from 'react';
import { Image, Tab } from 'semantic-ui-react';

class ProofPractice extends React.Component {
  render() {
    const proofProblem = [
      { menuItem: 'Sample Problem 1' },
      { menuItem: 'Sample Problem 2' },
      { menuItem: 'Sample Problem 3' },
    ];
    return (
      <div>
        <Tab panes = {proofProblem}/>
      </div>
    );
  }
}

export default ProofPractice;
