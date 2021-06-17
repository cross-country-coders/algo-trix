import React from 'react';
import { Container, Image, Tab } from 'semantic-ui-react';

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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/4R7chuhzq7k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Container>
      </Tab.Pane> },
      { menuItem: 'Adjacency Matrix', render: () => <Tab.Pane>
        <ul>
          <li>Space required: O(V^2)</li>
          <li>Time to list all the vertices that are adjacent: O(V)</li>
          <li>Determine whether (u,v) &#x2208; E : O(1)</li>
        </ul>
        <Container textAlign='center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/g-PGLbMth_g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Container>
      </Tab.Pane> },
      { menuItem: 'Breadth First Search', render: () => <Tab.Pane>
        <b>The algorithm for Breadth First Search (BFS)</b>
        <Image src='images/BFS.png' centered size='medium'/>
        <b>Facts You Should Memorize</b>
        <ul>
          <li>Uses queue</li>
          <li>WHITE implies that it was not encountered</li>
          <li>GRAY implies that it has been encountered but processing</li>
          <li>BLACK implies that it is done processing</li>
          <li>Enqueue and Dequeue takes O(1)</li>
          <li>Total Time to Queue: O(V)</li>
          <li>Scanning adjacency list: &#920;(E)</li>
          <li>Running Time of BFS: O(V+E)</li>
        </ul>
        <Container textAlign='center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/oDqjPvD54Ss" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Container>
      </Tab.Pane> },
      { menuItem: 'Depth First Search', render: () => <Tab.Pane>
        <b>The algorithm for Depth First Search (DFS)</b>
        <Image src='images/DFS.png' centered size='medium'/>
        <ul>
          <li>Operates in a stack like manner</li>
          <li> Will Search through all the verticies until all the edges are discovered</li>
          <li>Line 1 to 5 runs &#920;(V)</li>
          <li> Line 4 runs &#920;(E)</li>
          <li> Total Runtime of DFS: &#920;(V+E)</li>
        </ul>
        {/* eslint-disable-next-line max-len */}
        <Container textAlign='center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/7fujbpJ0LB4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
