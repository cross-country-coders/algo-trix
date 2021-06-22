import React from 'react';
import { Tab, Image } from 'semantic-ui-react';

class MaxFlowNotes extends React.Component {
  render() {
    const proofPanes = [
      { menuItem: 'Flow Network', render: () => <Tab.Pane>
        <ul>
          <li>a directed graph G = (V,E) such that each edge (u,v) has a
          capacity c(u,v) greater than or equal to 0</li>
          <li>if (u,v) &#x2209; E then c(u,v) = 0</li>
          <li>if (u,v) &#x2208; E then reverse edge (v,u) &#x2209; E</li>
          <li>vertex s is the source vertex</li>
          <li>vertex t is the sink vertex</li>
        </ul>
      </Tab.Pane> },
      { menuItem: 'Flow', render: () => <Tab.Pane>
        <Image src='images/flow.png' centered size='big'/>
      </Tab.Pane> },
      { menuItem: 'Cuts and Flow', render: () => <Tab.Pane>
        <Image src='images/flowcut.png' centered size='big'/>
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

export default MaxFlowNotes;
