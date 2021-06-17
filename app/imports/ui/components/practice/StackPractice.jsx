import React from 'react';
import { Tab } from 'semantic-ui-react';

export default class StackPractice extends React.Component {
  render() {
    const samplePane = [
      { menuItem: 'Sample 1', render: () => <Tab.Pane textAlign ='center'>
        <b>Describe how you could use a single array to implement three tasks?</b>
      </Tab.Pane> },
      { menuItem: 'Sample 2', render: () => <Tab.Pane>
          What is the tightest bound on the worst case asymptotic cost of queue enqueue and
          dequeue operations under the array implementations
      </Tab.Pane> },
      { menuItem: 'Sample 3', render: () => <Tab.Pane><b>Explain the type of the edges:</b>
        <b>Write a program to sort a stack such that the smallest items are on the top.</b>
      </Tab.Pane> },
    ];
    return (
      <Tab panes={samplePane}/>
    );
  }
}
