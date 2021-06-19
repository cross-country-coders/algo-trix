import React from 'react';
import { Container, Image, Tab, Header } from 'semantic-ui-react';

class MstNotes extends React.Component {
  render() {
    const proofPanes = [
      { menuItem: 'Properties of MST', render: () => <Tab.Pane>
        <b>Graph Notation</b>
        <ul>
          <li>any tree has no cycle</li>
          <li>one path between vertices</li>
          <li>there might be more than one MST</li>
        </ul>
      </Tab.Pane> },
      { menuItem: 'Kruskals Algorithm', render: () => <Tab.Pane>
        <Image src='images/mst.png' centered/>
        <ul>
          <li>edges are processed greedily</li>
          <li>organizes in nondecreasing order</li>
          <li>initialize O(1)</li>
          <li>first for loop: |V|</li>
          <li>Sort E: O(E lg E)</li>
          <li>Second For Loop: O(E)</li>
          <li>Run Time: O(E lg V)</li>
        </ul>
        <Container textAlign='center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/71UQH7Pr9kU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Container>
      </Tab.Pane> },
      { menuItem: 'Prims Algorithm', render: () => <Tab.Pane>
        <Image src='images/prim.png' centered/>
        <ul>
          <li>first for loop to queue: O(V lg V)</li>
          <li>decrease key of r: O(lg V)</li>
          <li>while loop: O(V lg V)</li>
          <li>decrease key: O(E lg V)</li>
          <li>Analysis: O(V lg V) + O(E lg V)</li>
          <li>If G is connected then O(E lg V)</li>
        </ul>
        <Container textAlign='center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cplfcGZmX7I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Container>
      </Tab.Pane> },
    ];
    return (
      <div>
        <Header as = 'h3' textAlign='centered'>Minimum Spanning Trees and Algorithms</Header>
        <Tab panes = {proofPanes}/>
      </div>
    );
  }
}

export default MstNotes;
