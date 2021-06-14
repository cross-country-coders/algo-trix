import React from 'react';
import { Header, Container } from 'semantic-ui-react';

export default class Runtime extends React.Component {
  render() {
    return (
      <div className='red'>
        <Header as = 'h2' textAlign='center' inverted>Review on Run Time (Big-O)</Header>
        <Container textAlign='center'>
          <p>Remember the big-O? The big-O for insertion sort?</p>
        </Container>
      </div>
    );
  }
}
