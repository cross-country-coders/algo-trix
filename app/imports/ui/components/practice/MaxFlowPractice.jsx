import React from 'react';
import { Tab, Image } from 'semantic-ui-react';

class MaxFlowPractice extends React.Component {
  render() {
    const proofPanes = [
      { menuItem: 'SAMPLE 1', render: () => <Tab.Pane>
        <b>What is the min-cut corresponding to the max-flow in this graph? </b>
        <Image src='images/max1.png' centered size='big'/>
      </Tab.Pane> },
      { menuItem: 'SAMPLE 2', render: () => <Tab.Pane>
        <b>Write the correct residual network for the flow network shown below?</b>
        <Image src='images/max2.png' centered size='big'/>
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

export default MaxFlowPractice;
