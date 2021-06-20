import React from 'react';
import { Image, Tab } from 'semantic-ui-react';

class MstPractice extends React.Component {
  render() {
    const singlePane = [
      { menuItem: 'Shortest Path Property', render: () => <Tab.Pane>
        <Image src='images/single.png' centered size='medium'/>
        Here are the following properties that you should memorize or take in notes for exams and quizzes.
      </Tab.Pane> },
      { menuItem: 'Bellman Ford', render: () => <Tab.Pane>
        <b>Bellman Ford</b>
        <Image src='images/bellman.png' centered size='medium'/>
        <ul>
          <li>Allows negative weight</li>
          <li>Brute Force Strategy</li>
          <li>Computes v.d and v.&#x03C0; for all v in V </li>
          <li>Runtime is O(VE)</li>
        </ul>
      </Tab.Pane> },
      { menuItem: 'Shortest Path in DAG Single Source Algorithms', render: () => <Tab.Pane>
        <b>DAG Single Source Algorithm</b>
        <Image src='images/dag.png' centered size='medium'/>
        <ul>
          <li>vertices occurs on shortest path in order with topological sort</li>
          <li>Run time is &#x03B8;(V + E)</li>
        </ul>
      </Tab.Pane> },
      { menuItem: 'Dijkstra', render: () => <Tab.Pane>
        <b>Djikstra</b>
        <uL>
          <li>Uses priority queue</li>
          <li>Greedy</li>
          <li>No Negative Weight</li>
          <li>O((V+E)lgV)</li>
          <li>Connected: O(E lg V)</li>
          <li>O(V lg V + E)</li>
        </uL>
        <Image src='images/djikstra.png' centered size='medium'/>
      </Tab.Pane> },
    ];
    return (
      <div>
        <Tab panes = {singlePane}/>
      </div>
    );
  }
}

export default MstPractice;
