import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header, Container, Card } from 'semantic-ui-react';
import SideNavBar from '../components/SideNavBar';
import Footer from '../components/Footer';

/** A simple static component to render some text for the landing page. */
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <SideNavBar/>
        <div className='red'>
          <Header as = 'h1' textAlign='center' inverted>WELCOME </Header>
          <Container text textAlign='center'>
            <p>We all know algorithm is a difficult subject. Let AlgoTrix help you out.</p>
          </Container></div>
        <Header as = 'h1' textAlign='center'>PreReq Materials</Header>
        <Container textAlign="center">
          <p> Some of the prereq materials you should review before taking Algorithms course.</p>
          <Card.Group centered itemsPerRow = {4}>
            <Card link as ={NavLink} exact to ="/sort">
              <Card.Content>
                <Card.Header>Sorting Algorithms</Card.Header>
                <Card.Description>Review on the different sorting algorithms.</Card.Description>
              </Card.Content>
            </Card>
            <Card link as = {NavLink} exact to = "/proof">
              <Card.Content>
                <Card.Header>Proof Methods</Card.Header>
                <Card.Description>Review on the different sorting algorithms.</Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content link>
                <Card.Header>Run Time</Card.Header>
                <Card.Description>Review on the different runtimes..</Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content link>
                <Card.Header>Basic ADTs</Card.Header>
                <Card.Description>Review on the Stacks, Queues, and Lists</Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
        <br/>
        <div className="red">
          <Container>
            <Header as = "h2" textAlign='center' inverted>Graph and Path</Header>
            <Container text textAlign='center'>
              <p>This covers topics such as MST, little Graph Theory, etc. </p>
            </Container>
            <Card.Group centered itemsPerRow = {4}>
              <Card link as = {NavLink} exact to = "/graph">
                <Card.Content>
                  <Card.Header>Graph and Theory</Card.Header>
                  <Card.Description>Review on Graph and Adjacency</Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
          <br/>
        </div>
        <div>
          <Header as = "h2" textAlign="center"> Trees</Header>
          <Container text textAlign='center'>
            <p> The more different types of trees that you will learn in ALgorithms course.</p>
          </Container>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default (HomePage);
