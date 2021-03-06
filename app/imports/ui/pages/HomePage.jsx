import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header, Container, Card } from 'semantic-ui-react';
import Footer from '../components/Footer';

/** A simple static component to render some text for the landing page. */
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className='red'>
          <Header as = 'h1' textAlign='center' inverted>WELCOME </Header>
          <Container text textAlign='center'>
            <p>We all know algorithm is a difficult subject. Let AlgoTrix help you out.</p>
          </Container></div>
        <Header as = 'h1' textAlign='center'>PreReq Materials</Header>
        <Container textAlign="center">
          <p> Some of the prereq materials you should review before taking Algorithms course.</p>
          <Card.Group centered itemsPerRow = {4}>
            <Card link as={NavLink} exact to='/sort'>
              <Card.Content>
                <Card.Header>Sorting Algorithms</Card.Header>
                <Card.Description>Review on the different sorting algorithms.</Card.Description>
              </Card.Content>
            </Card>
            <Card link as={NavLink} exact to='/proof'>
              <Card.Content>
                <Card.Header>Proof Methods</Card.Header>
                <Card.Description>Review on the different sorting algorithms.</Card.Description>
              </Card.Content>
            </Card>
            <Card link as={NavLink} exact to='/runtime'>
              <Card.Content>
                <Card.Header>Run Time</Card.Header>
                <Card.Description>Review on the different runtimes..</Card.Description>
              </Card.Content>
            </Card>
            <Card link as ={NavLink} exact to ='/stack'>
              <Card.Content>
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
              <Card link as = {NavLink} exact to = "/binary">
                <Card.Content>
                  <Card.Header>Binary Search Trees</Card.Header>
                  <Card.Description>Review and Practice Binary Search Tree</Card.Description>
                </Card.Content>
              </Card>
              <Card link as = {NavLink} exact to = "/graph">
                <Card.Content>
                  <Card.Header>Graph and Theory</Card.Header>
                  <Card.Description>Review on Graph and Adjacency</Card.Description>
                </Card.Content>
              </Card>
              <Card link as = {NavLink} exact to = "/single">
                <Card.Content>
                  <Card.Header>Single Source Shortest Path</Card.Header>
                  <Card.Description>Review on Single Shortest Path.</Card.Description>
                </Card.Content>
              </Card>
              <Card link as = {NavLink} exact to = "/allshort">
                <Card.Content>
                  <Card.Header>All Pair Shortest Path</Card.Header>
                  <Card.Description>Review on All Pair Shortest Path.</Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
          <br/>
        </div>
        <div>
          <Header as = "h2" textAlign="center"> Trees</Header>
          <Container text textAlign='center'>
            <p> The more different types of trees that you will learn in Algorithms course.</p>
            <Card.Group centered itemsPerRow={4}>
              <Card link as = {NavLink} exact to = "/red-black">
                <Card.Content>
                  <Card.Header>Red Black Trees</Card.Header>
                  <Card.Description>Review on Red Black Trees</Card.Description>
                </Card.Content>
              </Card>
              <Card link as = {NavLink} exact to = "/mst">
                <Card.Content>
                  <Card.Header>Minimum Span Tree</Card.Header>
                  <Card.Description>Review notes and practice on MST.</Card.Description>
                </Card.Content>
              </Card>
              <Card link as = {NavLink} exact to = "/max">
                <Card.Content>
                  <Card.Header>Maximum Flow</Card.Header>
                  <Card.Description>Review on All Pair Shortest Path.</Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
          <br/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default (HomePage);
