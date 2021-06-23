import React from 'react';
import { Tab, Header } from 'semantic-ui-react';

class RedBlackPractice extends React.Component {
  render() {
    const proofPanes = [
      { menuItem: 'Sample 1', render: () => <Tab.Pane>
        <b>What are Red-Black trees used to represent simultaneously?</b>
      </Tab.Pane> },
      { menuItem: 'Problem 2', render: () => <Tab.Pane>
        <b>What of the following properties is violated in a red-black tree when we have underflow
          of a node in the corresponding 2-4 tree?</b>
      </Tab.Pane> },
      { menuItem: 'Problem 3', render: () => <Tab.Pane>
        <b>What of the following properties is necessary to guarantee that the 2-4 tree it represents
         is balanced, assuming that the other properties hold?</b>
      </Tab.Pane> },
      { menuItem: 'Problem 4', render: () => <Tab.Pane>
        <b>What of the following properties is violated in a red-black tree when we have either
          incorrect representation or overflow of a node in the corresponding 2-4 tree?</b>
      </Tab.Pane> },
    ];
    return (
      <div>
        <br/>
        <Header as = 'h3' textAlign='center'>All Shortest Path</Header>
        <Tab panes = {proofPanes}/>
      </div>
    );
  }
}

export default RedBlackPractice;
