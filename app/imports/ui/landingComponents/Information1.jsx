import React from 'react';
import { Container } from 'semantic-ui-react';

class Information1 extends React.Component {
  render() {
    const header1 = {
      color: 'red',
      paddingTop: '20%',
      fontWeight: 'bold',
      fontSize: 'calc(0.5vw + 0.9vh + 2vmin)',
    };
    return (
      <Container className='body' textAlign="center" style={header1}>
        Need help in passing Algorithms?
      </Container>
    );
  }
}

export default Information1;
