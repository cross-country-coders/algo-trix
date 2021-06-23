import React from 'react';
import { Tab, Header } from 'semantic-ui-react';

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
      { menuItem: 'BST Property', render: () => <Tab.Pane>
        <ul>
          <li>y is the left of x implies that the key of y is less than or equal to key of x</li>
          <li>y is the right of x implies that the key of y is greater than or equal to key of x</li>
        </ul>
      </Tab.Pane> },
      { menuItem: 'Heap', render: () => <Tab.Pane>
        <ul>
          <li>Number of nodes in nearly complete binary tree of height h is 2^(h+1)-1</li>
          <li>Height of an N node nearly complete binary tree is h = log(N)</li>
          <li>Roof of the tree is A[1]</li>
          <li>Parent of A[i] is A[i/2]</li>
          <li>Left child of A[i] is A[2i]</li>
          <li>Right child of A[i] is A[2i+1]</li>
        </ul>
      </Tab.Pane> },
      { menuItem: 'Runtime of Heap', render: () => <Tab.Pane>
        <ul>
          <li>Max-Heapify: O(lg n)</li>
          <li>Build Max Heap: O(n)</li>
          <li>Heap Sort: O(n lg n)</li>
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
