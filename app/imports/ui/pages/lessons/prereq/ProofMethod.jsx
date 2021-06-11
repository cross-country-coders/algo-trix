import React from 'react';
import { Header, Container, Tab, Image } from 'semantic-ui-react';
import SideNavBar from '../../../components/SideNavBar';

class ProofMethod extends React.Component {
  render() {
    const proofPanes = [
      { menuItem: 'Direct Proof' },
      { menuItem: 'Proof by Contradiction' },
      { menuItem: 'Proof by Contrapositive ' },
      { menuItem: 'Induction Proof', render: () => <Tab.Pane>One proof that is popular in ICS 311
      is <b>Proof By Induction</b>. Below is the basic template of it. <br/>
      <ol>
        <li>State what the P(x) is.</li>
        <li><b>Base Step</b><br/> Show that the Base case is true.</li>
        <li><b>Inducive Step</b> Assume that for an arbitrary k in the range 1 to n that P(k) is true. <br/>
        Prove that P(k+1) holds true.</li>
        <li><b>Conclusion:</b> From induction, for all x P(x) is true.
          <br/>
          <Image src='images/induction.png'/></li>
      </ol></Tab.Pane> },
    ];
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
          <Tab panes ={proofPanes}/>
        </Container>
      </div>
    );
  }
}
export default (ProofMethod);
