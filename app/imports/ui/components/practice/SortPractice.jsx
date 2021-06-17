import React from 'react';
import { Container, Tab } from 'semantic-ui-react';

export default class SortPractice extends React.Component {
  render() {
    const sortProblem = [
      { menuItem: 'Sample 1', render: () => <Tab.Pane>
        <b>Perform Radix Sort on the following words:</b> <br/>
        <Container textAlign='center'>
          BOW, DOG, FAX, DIG, BIG, COW
        </Container>
      </Tab.Pane> },
      { menuItem: 'Sample 2', render: () => <Tab.Pane>
        <b>Suppose that you knew that your array was sorted except for the possible misplacement
            of one or two elements: Which of the sorts that we have studied would be the fastest?
            What is its expected big-O runtime given your choice in the above question?</b>
      </Tab.Pane> },
      { menuItem: 'Sample 3', render: () => <Tab.Pane>
        <b>Match the following with the appropriate sort algorithm</b>
        <ol>
          <li>Radix Sort</li>
          <li>Insertion Sort</li>
          <li>Merge Sort</li>
          <li>Randomized Quick Sort</li>
        </ol>
        <ol type='I'>
          <li>application demands a guarantee that <u>every sort</u> finishes within O(n lg n) time
              even if average cost per higher</li>
          <li>application requires a fast sort on a variety of input sizes and types and distribution of keys and the sort must be done in place to conserve memory</li>
          <li> application will only be very short lists and you want simple code</li>
          <li>you are sorting a set of d digit integers and done mind using a specialized sort to gain speed</li>
        </ol>
      </Tab.Pane> },
    ];
    return (
      <div>
        <br/>
        <Tab panes={sortProblem}/>
        <br/>
      </div>
    );
  }
}
