import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import MstNotes from '../../../components/notes/MstNotes';
import MstPractice from '../../../components/practice/MstPractice';

export default class MST extends React.Component {
  render() {
    return (
      <div>
        <div className='red'>
          <Header as = 'h2' textAlign='center' inverted>Minimum Spanning Trees</Header>
          <br/>
        </div>
        <Container>
          <br/>
          <MstNotes/>
          <Header as = 'h3' textAlign='center'>Example Problems</Header>
          <MstPractice/>
          <br/>
        </Container>
      </div>
    );
  }
}
