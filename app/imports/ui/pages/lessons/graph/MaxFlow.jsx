import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import MaxFlowNotes from '../../../components/notes/MaxFlowNotes';
import MaxFlowPractice from '../../../components/practice/MaxFlowPractice';

export default class MaxFlow extends React.Component {
  render() {
    return (
      <div>
        <div className='red'>
          <Header as = 'h2' textAlign='center' inverted>Maximum Flow</Header>
          <br/>
        </div>
        <Container>
          <br/>
          <MaxFlowNotes/>
          <Header as = 'h3' textAlign='center'>Example Problems</Header>
          <MaxFlowPractice/>
          <br/>
        </Container>
      </div>
    );
  }
}
