import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import RuntimeNotes from '../../../components/notes/RuntimeNotes';

export default class Runtime extends React.Component {
  render() {
    return (
      <div>
        <div className='red'>
          <Header as = 'h2' textAlign='center' inverted>Review on Run Time Analysis (Big-O)</Header>
          <Container textAlign='center'>
            <p>The behavior of your algorithm based on given input. On a graph!</p>
          </Container>
        </div>
        <br/>
        <Container>
          <RuntimeNotes />
        </Container>
      </div>
    );
  }
}
