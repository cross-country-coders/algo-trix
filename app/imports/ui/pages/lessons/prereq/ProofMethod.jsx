import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import ProofNotes from '../../../components/notes/ProofNotes';
import ProofPractice from '../../../components/practice/proof/ProofPractice';

export default class ProofMethod extends React.Component {
  render() {
    return (
      <div>
        <div className='red'>
          <Header as = 'h2' textAlign='center' inverted>Review on Proof Method</Header>
          <Container textAlign='center'>
            <p>Taking an algorithm courses requires a basic knowledge on proofs.</p>
          </Container>
        </div>
        <Container>
          <br/>
          <Header as = 'h3' textAlign='center'>The Different Proof Techniques </Header>
          <ProofNotes/>
          <Header as = 'h3' textAlign='center'>Example Problems</Header>
          <ProofPractice/>
        </Container>
      </div>
    );
  }
}
