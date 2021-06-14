import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import SideNavBar from '../../../components/SideNavBar';
import GraphNotes from '../../../components/notes/GraphNotes';

class Graph extends React.Component {
  render() {
    return (
      <div>
        <SideNavBar/>
        <div className='red'>
          <Header as = 'h2' textAlign='center' inverted>Graph Theory</Header>
          <Container textAlign='center'>
            <p>Graphs are more than just a bar or a pie on a chart.</p>
          </Container>
        </div>
        <Container>
          <br/>
          <Header as = 'h3' textAlign='center'>Graph and the Necessities </Header>
          <GraphNotes/>
          <Header as = 'h3' textAlign='center'>Example Problems</Header>
        </Container>
      </div>
    );
  }
}
export default (Graph);
