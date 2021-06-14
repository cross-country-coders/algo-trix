import React from 'react';
import { Image, Tab, Header, Container } from 'semantic-ui-react';

class ShortPathNotes extends React.Component {
  render() {
    const proofPanes = [
      { menuItem: 'Single Shortest Path Property', render: () => <Tab.Pane>
        <Image src='images/singleshort/singleshort.png' centered size='big'/>
      </Tab.Pane> },
      { menuItem: 'Bellmans Ford', render: () => <Tab.Pane>
        <Header as ='h4' textAlign='centered'>The Algorithm of Bellman Ford</Header>
        <Image src='images/singleshort/bellman.png' centered size = 'medium'/>
        <ul>
          <li>Allows Negative Weight</li>
          <li>A Brute Force Strategy</li>
          <li>Runtime is O(VE)</li>
        </ul>
        <Container textAlign='center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/obWXjtg0L64" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Container>
      </Tab.Pane> },
      { menuItem: 'Djikstra', render: () => <Tab.Pane>
        <Header as ='h4' textAlign='centered'>The Algorithm for Djikstra</Header>
        <Image src='images/singleshort/djikstra.png' centered size = 'medium'/>
        <ul>
          <li>Uses Priority Queues</li>
          <li>Greedy</li>
          <li>No negative weights are allowed</li>
          <li>Runtime: O(E + V log (V))</li>
        </ul>
        <Container textAlign='center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/_lHSawdgXpI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Container>
      </Tab.Pane> },
    ];
    return (
      <div>
        <Tab panes = {proofPanes}/>
      </div>
    );
  }
}

export default ShortPathNotes;
