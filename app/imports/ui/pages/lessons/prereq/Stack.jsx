import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import StackNotes from '../../../components/notes/StackNotes';
export default class Stack extends React.Component {
  render() {
    return (
      <div>
        <div className='red'>
          <Header as = 'h2' textAlign='center' inverted>Stack and Queues</Header>
          <Container textAlign='center'>
            <p>Remember when you were told Stack and Queues were important.</p>
          </Container>
        </div>
        <Container>
          <br/>
          <Header as = 'h3' textAlign='center'>The Concept of Stack and Queues </Header>
          <StackNotes/>
          <Header as = 'h3' textAlign='center'>Example Problems</Header>
        </Container>
      </div>
    );
  }
}
