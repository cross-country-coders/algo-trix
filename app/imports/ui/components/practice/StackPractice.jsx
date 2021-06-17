import React from 'react';
import { Tab } from 'semantic-ui-react';

export default class StackPractice extends React.Component {
  render() {
    const samplePane = [
      { menuItem: 'Sample 1', render: () => <Tab.Pane textAlign ='center'>
        <b>Describe how you could use a single array to implement three tasks?</b>
      </Tab.Pane> },
      { menuItem: 'Sample 2', render: () => <Tab.Pane><b>Given an array representation A of a graph G=(V,E), and assuming randomly distributed graphs, what is the time complexity in terms of V and E to determine whether
          an edge exists from vertex u to vertex v, and why?</b></Tab.Pane> },
      { menuItem: 'Sample 3', render: () => <Tab.Pane><b>Explain the type of the edges:</b>
        <ol>
          <li> Forward Edge</li>
          <li> Backward Edge</li>
          <li> Cross Edge</li>
        </ol></Tab.Pane> },
    ];
    return (
      <Tab panes={samplePane}/>
    );
  }
}
