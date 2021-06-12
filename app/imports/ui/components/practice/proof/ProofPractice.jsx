import React from 'react';
import { Image, Tab } from 'semantic-ui-react';

class ProofPractice extends React.Component {
  render() {
    const samplePane = [
      { menuItem: 'Sample 1', render: () => <Tab.Pane><b>Prove the following formula</b><br/>
        <Image src='images/sample1.png'/></Tab.Pane> },
      { menuItem: 'Sample 2' },
      { menuItem: 'Sample 3' },
    ];
    return (
      <Tab panes={samplePane}/>
    );
  }
} export default ProofPractice;
