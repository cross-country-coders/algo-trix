import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import RedBlackNotes from '../../../components/notes/RedBlackNotes';
import RedBlackPractice from '../../../components/practice/RedBlackPractice';

export default class RedBlack extends React.Component {
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
          <RedBlackNotes/>
          <br/>
          <Header as = 'h3' textAlign='center'>Example Problems</Header>
          <br/>
          <RedBlackPractice/>
        </Container>
      </div>
    );
  }
}
