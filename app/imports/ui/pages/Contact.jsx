import React from 'react';
import { Header, Sticky, Accordion, Grid } from 'semantic-ui-react';
import SideNavBar from '../components/SideNavBar';

const question = [
  {
    key: 'why-request',
    title: 'Why should I contact Administration?',
    content: {
      content: (
        <div>
          <div style={{ color: 'white' }}>
              Feel free to contact Admin for following reasons
            <ul>
              <li> You feel that the answers for the problems are wrong.</li>
              <li> You would like to delete your account.</li>
              <li> You are having difficulties with your account.</li>
              <li> You have recommendations for improvements.</li>
            </ul>
          </div>
        </div>
      ),
    },
  },
];
class Contact extends React.Component {
  render() {
    return (
      <Sticky>
        <div className = "red">
          <SideNavBar/>
          <Header as = 'h2' textAlign='center' inverted>Contact</Header>
          <Grid textAlign={'center'}>
            <Accordion inverted panels = {question}/>
            <br/>
          </Grid>
        </div>
      </Sticky>
    );
  }
}

export default (Contact);
