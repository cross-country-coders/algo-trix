import React from 'react';
import { Image, Tab } from 'semantic-ui-react';

class StackNotes extends React.Component {
  render() {
    const proofPanes = [
      { menuItem: 'Practice Problem 1', render: () => <Tab.Pane>
        <b>Run Floyd Warshall, showing the matrix D^(k) for each value of k.</b>
      </Tab.Pane> },
      { menuItem: 'Practice Problem 2', render: () => <Tab.Pane>
        <b>Run Floyd Warshall, showing the matrix D^(k) for each value of k.</b>
        <Image src='images/floydpractice.png' centered size='medium'/>
      </Tab.Pane> },
      { menuItem: 'Practice Problem 3', render: () => <Tab.Pane>
        <b>After a given iteration of the loop line 3 of Floyd Warshall, we have computed</b>
      </Tab.Pane> },
      { menuItem: 'Practice Problem 4', render: () => <Tab.Pane>
        <b>In Johnson’s algorithm, the addition of a new vertex s to G with outgoing edges to all
            other vertices adds new cycles to G and eliminates negative weight cycle</b><br/>
          TRUE or FALSE
      </Tab.Pane> },
    ];
    return (
      <div>
        <Tab panes = {proofPanes}/>
      </div>
    );
  }
}

export default StackNotes;
