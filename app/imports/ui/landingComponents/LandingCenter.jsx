import React from 'react';
import { Image, Divider, Header, Container, Grid, Segment } from 'semantic-ui-react';

class LandingCenter extends React.Component {
  render() {
    const header1 = {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 'calc(0.5vw + 0.9vh + 2vmin)',
    };
    return (
      <div>
        <div className="landing-header-background"/>
        <div className='landing-bg-text'><p>Algo-Trix</p><br/>
          <h2> Your friend to pass Algorithm (Gate Way Keeper)
          </h2></div>
      </div>
    );
  }
}

export default LandingCenter;
