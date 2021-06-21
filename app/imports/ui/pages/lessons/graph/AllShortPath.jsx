import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import AllShortNotes from '../../../components/notes/AllShortNotes';
import AllShortPractice from '../../../components/practice/AllShortPractice';

export default class AllShortPath extends React.Component {
  render() {
    return (
      <div>
        <div className='red'>
          <Header as = 'h2' textAlign='center' inverted>Single Source Shortest Paths</Header>
          <Container textAlign={'center'}>
              Why take the long route when you can take the shortest route in life.
          </Container>
          <br/>
        </div>
        <Container>
          <AllShortNotes/>
          <br/>
          <Header as = 'h3' textAlign='center'>Example Problems</Header>
          <br/>
          <AllShortPractice/>
        </Container>
      </div>
    );
  }
}
