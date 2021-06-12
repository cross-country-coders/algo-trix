import React from 'react';
import { Image, Tab } from 'semantic-ui-react';

class ProofPractice extends React.Component {
  render() {
    const samplePane = [
      { menuItem: 'Sample 1', render: () => <Tab.Pane><b>Prove the following formula</b>
        <Image src='images/sample1.png'/></Tab.Pane> },
      { menuItem: 'Sample 2', render: () => <Tab.Pane><b>Use a direct proof to show that the sum of two odd integers is even.</b></Tab.Pane> },
      { menuItem: 'Sample 3', render: () => <Tab.Pane><b>Show that if n is an integer and n^3 + 5 is odd, then n is even using</b></Tab.Pane> },
    ];
    return (
      <Tab panes={samplePane}/>
    );
  }
} export default ProofPractice;
