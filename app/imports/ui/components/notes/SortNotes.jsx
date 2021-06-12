import React from 'react';
import { Container, Image, Tab } from 'semantic-ui-react';

class SortNotes extends React.Component {
  render() {
    const proofPanes = [
      { menuItem: 'Insertion Sort', render: () => <Tab.Pane>
        <b>Steps to Insertion Sort</b>: to sort an array of size n in ascending order.
        <ol>
          <li>Iterate from arr[1] to arr[n] over the array</li>
          <li>Compare the current element to its predecessor.</li>
          <li>If the key element is smaller than its predecessor compare it to the element before.
          Move the greater element one position up to make space for the swapped element.</li>
        </ol>
        <ul>
          <li>Best Case RunTime: O(n)</li>
          <li>Worst Case RunTime: O(n^2)</li>
        </ul>
        <Container textAlign='center'>
          <iframe width="520" height="415"
            src="https://www.youtube.com/watch?v=i-SKeOcBwko">
          </iframe>
        </Container>
      </Tab.Pane> },
      { menuItem: 'Bubble Sort', render: () => <Tab.Pane>
          Assume that the conclusion statement is true and show that it leads to a contradiction.<br/>
          Below is a sample problem of contradiction style proof.<br/>
        <Image src='images/contradiction.png' centered/>
      </Tab.Pane> },
      { menuItem: 'Selection Sort ' },
      { menuItem: 'Merge Sort', render: () => <Tab.Pane>One proof that is popular in ICS 311
          is <b>Proof By Induction</b>. Below is the basic template of it. <br/>
      <ol>
        <li>State what the P(x) is.</li>
        <li><b>Base Step</b><br/> Show that the Base case is true.</li>
        <li><b>Inducive Step</b> Assume that for an arbitrary k in the range 1 to n that P(k) is true. <br/>
              Prove that P(k+1) holds true.</li>
        <li><b>Conclusion:</b> From induction, for all x P(x) is true.
          <br/>
          <b>Sample on Induction</b>
          <Image src='images/induction.png'/></li>
      </ol></Tab.Pane> },
    ];
    return (
      <div>
        <Tab panes = {proofPanes}/>
      </div>
    );
  }
}

export default SortNotes;
