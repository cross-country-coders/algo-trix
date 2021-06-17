import React from 'react';
import { Container, Tab } from 'semantic-ui-react';

class StackNotes extends React.Component {
  render() {
    const proofPanes = [
      { menuItem: 'Stack', render: () => <Tab.Pane>
        <b>Stack</b>
        <ul>
          <li>Last In, First Out property</li>
          <li>Most recent item will be removed from the stack</li>
          <li>The properties of Stack</li>
          <ul>
            <li><code>pop()</code><br/>
            Remove the top item from the stack</li>
            <li><code>push(item)</code><br/>
            Add an item to to the top of the stack</li>
            <li><code>peek()</code><br/>
            Return the top of the Stack</li>
            <li><code>isEmpty()</code><br/>
            Return <b>True</b> iff the stack is empty</li>
          </ul>
        </ul>
        <Container textAlign='center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/niBsGw4h5yI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Container>
      </Tab.Pane> },
      { menuItem: 'Queue', render: () => <Tab.Pane>
        <ul>
          <li>First In First Out Property</li>
          <li>items are removed from the order they are added</li>
          <li><b>Operation of Queue</b></li>
          <ul>
            <li><code>add(item)</code><br/>
            Add an item to the end of the list</li>
            <li><code>remove()</code> <br/>
            Remove the first item in the list</li>
            <li><code>peek()</code><br/>
            return the top of the queue</li>
            <li><code>isEmpty()</code><br/>
            Return <b>true</b> iff the queue is empty</li>
          </ul>
        </ul>
        <Container textAlign='center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jXMqVpAVyMY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Container>
      </Tab.Pane> },
      { menuItem: 'Tree', render: () => <Tab.Pane>
        <ul>
          <li>A data structure composed of nodes</li>
          <li><b>Property of the Node</b>
            <ul>
              <li>Each tree has a root node</li>
              <li>Root NOde has zero or more child nodes</li>
              <li>Child node has zero or more child nodes and so on</li>
              <li>Tree cannot contain cycle</li>
            </ul>
          </li>
        </ul>
        <Container textAlign='center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1XC3p2zBK34" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Container>
      </Tab.Pane> },
    ];
    return (
      <div>
        <Tab panes = {proofPanes}/>
      </div>
    );
  }
}

export default StackNotes;
