import React from 'react';
import { Tab } from 'semantic-ui-react';

class SinglePathPractice extends React.Component {
  render() {
    const singlePane = [
      { menuItem: 'Problem 1', render: () => <Tab.Pane>
        <b>What problem solving strategy do both Kruskal’s and Prim’s SinglePath algorithms use?</b>
      </Tab.Pane> },
      { menuItem: 'Problem 2', render: () => <Tab.Pane>
        <b>Given a graph G = (V,E) with cost on edges and set S &#8834; V, let (u,v) be an edge such taht (u,v)
            is the minimum cost edge between any vertex in S and any vertex in V-S. Then the SinglePath of G must include edge (u,v).<br/>
            TRUE / FALSE</b>
      </Tab.Pane> },
      { menuItem: 'Problem 3', render: () => <Tab.Pane>
        <b>Let T be a SinglePath of G. Then, for any pair of vertices s and t, the shortest path from s to t in G is the path from s to t in T <br/>
            TRUE / FALSE</b>
      </Tab.Pane> },
      { menuItem: 'Problem 4', render: () => <Tab.Pane>
        <b>Check off the edges that are included in a SinglePath for this graph.</b>
      </Tab.Pane> },
    ];
    return (
      <div>
        <Tab panes = {singlePane}/>
      </div>
    );
  }
}

export default SinglePathPractice;
