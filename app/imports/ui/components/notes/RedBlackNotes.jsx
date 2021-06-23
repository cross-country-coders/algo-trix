import React from 'react';
import { Tab, Header, Container } from 'semantic-ui-react';

class RedBlackNotes extends React.Component {
  render() {
    const proofPanes = [
      { menuItem: '2-3-4 Trees', render: () => <Tab.Pane>
        <b>Properties of the Tree</b>
        <ul>
          <li>Node Size: Internal node has 2-4 children</li>
          <li>Depth Property: external nodes have the same depth</li>
          <li>2-4 Tree Sorting n item has a height of &Theta;(lg n)</li>
          <li>Insertion: &Theta;(lg n)</li>
          <li>Deletion: &Theta;(lg n)</li>
        </ul>
      </Tab.Pane> },
      { menuItem: 'Red Black ', render: () => <Tab.Pane>
        <b>Properties of Red Black Tree</b>
        <ul>
          <li>Color: Either Red or Black</li>
          <li>Root: Always Black</li>
          <li>External: Leaf is black</li>
          <li>Depth: Each node, all the the paths from the node to descendant leaves contain the same
            number of black node </li>
        </ul>
      </Tab.Pane> },
      { menuItem: 'Insertion Red Black Tree', render: () => <Tab.Pane>
        <b>Different Cases for Insertion</b><br/>
          When inserting the color is always red.
        <ul>
          <li>Case 1: Z.uncle is Red</li>
          Solution recolor Z.parent, uncle, grandparent
          <li>Case 2: Z uncle is black with a trianglar shape</li>
          Solution Rotate Z.parent
          <li>Case 3: Z.uncle is black with a line</li>
          Solution rotate z.grandparent and recolor
          <li>Insertion: O(log n)</li>
          <li>Recolor and Violation Clean Up: O(1)</li>
        </ul>
        <Container textAlign = "center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5IBxA-bZZH8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Container>
      </Tab.Pane> },
    ];
    return (
      <div>
        <br/>
        <Header as = 'h3' textAlign='center'>Facts To Memorize</Header>
        <Tab panes = {proofPanes}/>
      </div>
    );
  }
}

export default RedBlackNotes;
