import React from 'react';
import { Header, Container, Tab, Image } from 'semantic-ui-react';
import SideNavBar from '../../../components/SideNavBar';
import ProofNotes from '../../../components/notes/ProofNotes';

class ProofMethod extends React.Component {
  render() {
    return (
      <div>
        <SideNavBar/>
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
        </Container>
      </div>
    );
  }
}
export default (ProofMethod);
