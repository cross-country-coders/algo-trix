import React from 'react';
import { Container, Image } from 'semantic-ui-react';

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
        <Image src = 'public/images/algorithm.png'/>
      </Container>
    );
  }
}

export default Information1;
