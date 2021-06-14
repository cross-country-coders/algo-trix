import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import SortNotes from '../../../components/notes/SortNotes';
import SortPractice from '../../../components/practice/proof/SortPractice';

export default class Sort extends React.Component {
  render() {
    return (
      <div>
        <div className='red'>
          <Container>
            <Header as = 'h2' textAlign='center' inverted>Sorting Alogrithm</Header>
            <p>For those who thought you did not need sorting alogorithms, well here is a chance to think again.</p>
          </Container>
        </div>
        <br/>
        <Container><SortNotes/>
        </Container>
        <br/>
        <div className='red'>
          <Container textAlign='center'>
            <Header as = 'h3' textAlign='center' inverted>Sample Problems</Header>
            <p> Here are some practice problems that you can do.</p>
          </Container>
        </div>
        <Container>
          <SortPractice/>
        </Container>
      </div>
    );
  }
}
