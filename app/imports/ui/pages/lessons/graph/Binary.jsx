import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import BinaryNotes from '../../../components/notes/BinaryNotes';
import BinaryPractice from '../../../components/practice/BinaryPractice';

export default class Binary extends React.Component {
  render() {
    return (
      <div>
        <div className='red'>
          <Header as = 'h2' textAlign='center' inverted>Binary Search Tree</Header>
          <Container textAlign={'center'}>
             If you are searching for something, sometimes taking two paths are necessary.
          </Container>
          <br/>
        </div>
        <Container>
          <BinaryNotes/>
          <br/>
          <Header as = 'h3' textAlign='center'>Example Problems</Header>
          <br/>
          <BinaryPractice/>
        </Container>
      </div>
    );
  }
}
