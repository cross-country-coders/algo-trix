import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import SinglePathNotes from '../../../components/notes/SinglePathNotes';
import SinglePathPractice from '../../../components/practice/SinglePathPractice';

export default class SinglePath extends React.Component {
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
          <br/>
          <SinglePathNotes/>
          <Header as = 'h3' textAlign='center'>Example Problems</Header>
          <SinglePathPractice/>
          <br/>
        </Container>
      </div>
    );
  }
}
