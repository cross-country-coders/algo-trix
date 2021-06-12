import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import SideNavBar from '../../../components/SideNavBar';
import SortNotes from '../../../components/notes/SortNotes';

class Sort extends React.Component {
  render() {
    return (
      <div>
        <SideNavBar/>
        <div className='red'>
          <Container>
            <Header as = 'h2' textAlign='center' inverted>Sorting Alogrithm</Header>
            <p>For those who thought you did not need sorting alogorithms, well here is a chance to think again.</p>
          </Container>
        </div>
        <br/>
        <Container><SortNotes/>
        </Container>
      </div>
    );
  }
}
export default Sort;
