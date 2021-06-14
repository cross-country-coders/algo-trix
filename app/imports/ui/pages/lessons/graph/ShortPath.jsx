import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import SideNavBar from '../../../components/SideNavBar';
import ShortPathNotes from '../../../components/notes/ShortPathNotes';

class ShortPath extends React.Component {
  render() {
    return (
      <div>
        <SideNavBar/>
        <div className='red'>
          <Header as = 'h2' textAlign='center' inverted>Single Short Path</Header>
          <Container textAlign='center'>
            <p>Humans are lazy... therefore, we will try to find the shortest path to go to places.</p>
          </Container>
        </div>
        <Container>
          <br/>
          <Header as = 'h3' textAlign='center'>Explanation on Shortest Path</Header>
          <ShortPathNotes/>
          <Header as = 'h3' textAlign='center'>Example and Review Problems</Header>
          <br/>
        </Container>
      </div>
    );
  }
}
export default (ShortPath);
