import React from 'react';
import { Tab, Header, Image } from 'semantic-ui-react';

class MaxFlowNotes extends React.Component {
  render() {
    const proofPanes = [
      { menuItem: 'Flow Network', render: () => <Tab.Pane>
        <b>Iterated BellMan Ford</b>
        <ul>
          <li>a directed graph G = (V,E) such that each edge (u,v) has a
          capacity c(u,v) greater than or equal to 0</li>
          <li>if (u,v) &#x2209; E then c(u,v) = 0</li>
          <li>if (u,v) &#x2208; E then reverse edge (v,u) &#x2209; E</li>
          <li>vertex s is the source vertex</li>
          <li>vertex t is the sink vertex</li>
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

export default MaxFlowNotes;
