import React from 'react';
import { Tab, Image } from 'semantic-ui-react';

class BinaryPractice extends React.Component {
  render() {
    const proofPanes = [
      { menuItem: 'Sample 1', render: () => <Tab.Pane>
        <b>Suppose you have a binary heap represented as an array using 1-based indexing (root
          is at index 1). An item is at index 31 in the array: what is the index of its parent?
          Write an integer:</b>
      </Tab.Pane> },
      { menuItem: 'Problem 2', render: () => <Tab.Pane>
        <b>Is this a Max-Heap? If not, why not?</b>
        <Image src = 'images/heapProblem.png' centered size = 'medium'/>
      </Tab.Pane> },
      { menuItem: 'Problem 3', render: () => <Tab.Pane>
        <b>Suppose you have a binary heap represented as an array using 1-based indexing (root
          is at index 1). An item is at index 31 in the array: what is the index of its right child?
          Write an integer:</b>
      </Tab.Pane> },
      { menuItem: 'Problem 4', render: () => <Tab.Pane>
        <b>How may internal vertices are there in a complete binary tree of height 10?</b>
      </Tab.Pane> },
    ];
    return (
      <div>
        <br/>
        <Tab panes = {proofPanes}/>
      </div>
    );
  }
}

export default BinaryPractice;
