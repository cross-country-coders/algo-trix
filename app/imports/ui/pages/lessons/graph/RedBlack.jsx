import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import RedBlackNotes from '../../../components/notes/RedBlackNotes';
import RedBlackPractice from '../../../components/practice/RedBlackPractice';

export default class RedBlack extends React.Component {
  render() {
    return (
      <div>
        <div className='red'>
          <Header as = 'h2' textAlign='center' inverted>Red Black Trees</Header>
          <Container textAlign={'center'}>
              Color creates diversity ... what about in algorithms and red and black trees.
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
