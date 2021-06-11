import React from 'react';
import { Image, Tab } from 'semantic-ui-react';

class ProofNotes extends React.Component {
  render() {
    const proofPanes = [
      { menuItem: 'Direct Proof' },
      { menuItem: 'Proof by Contradiction', render: () => <Tab.Pane>
        Assume that the conclusion statement is true and show that it leads to a contradiction.<br/>
          Below is a sample problem of contradiction style proof.<br/>
        <Image src='images/contradiction.png'/>
      </Tab.Pane> },
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
          <b>Sample on Induction</b>
          <Image src='images/induction.png'/></li>
      </ol></Tab.Pane> },
    ];
    return (
      <div>
        <Tab panes = {proofPanes}/>
      </div>
    );
  }
}

export default ProofNotes;
