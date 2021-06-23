import React from 'react';
import { Tab, Header, Image } from 'semantic-ui-react';

class BinaryNotes extends React.Component {
  render() {
    const proofPanes = [
      { menuItem: 'General Binary Search Tree', render: () => <Tab.Pane>
        <b>Full Binary Tree of Height h</b>
        <ul>
          <li>Number of Leaves = number of internal verticies - 1</li>
          <li>Number of leaves at least h+1 and most 2^h</li>
          <li>Total Num of Vertices at least 2h+1 and 2^(h+1) - 1 at most</li>
          <li>Height h is at least lg(n+1) - 1 and at most (n-1)/2</li>
        </ul>
      </Tab.Pane> },
      { menuItem: 'Iterated Dijkstra', render: () => <Tab.Pane>
        <ul>
          <li>|V| iteragtion gives O(VE lg V)</li>
          <li>Dense Graph takes O(V^3 lg V)</li>
          <li>Using Fibonnaci Heaps: O(V^2 lg V + VE)</li>
          <li>Does not work with Negative Weights</li>
        </ul>
      </Tab.Pane> },
      { menuItem: 'Johnson Algorithm', render: () => <Tab.Pane>
        <Image src='images/johnson.png' centered size='medium'/>
        <ul>
          <li>Define h(v) = &delta;(s,v) for all v in V</li>
          <li>&Theta;(V) to find G</li>
          <li>O(VE) to run BellMan ford</li>
          <li>O(V) to find h(v)</li>
          <li>&Theta;(E) to compute w</li>
          <li>&Theta;(V^2) to initialize D</li>
          <li>Overall RunTime: O(V E lg V)</li>
          <li>With Fibonnaci Heaps: O(V^2 lg V + V E)</li>
        </ul>
      </Tab.Pane> },
      { menuItem: 'Floyd Warshall', render: () => <Tab.Pane>
        <Image src='images/floyd.png' centered size='medium'/>
        <ul>
          <li>Works with negative weight edges</li>
          <li>RunTime O(V^3)</li>
        </ul>
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

export default BinaryNotes;
