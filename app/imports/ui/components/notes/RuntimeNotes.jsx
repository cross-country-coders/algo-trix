import React from 'react';
import { Tab, Image, Header } from 'semantic-ui-react';

export default class RuntimeNotes extends React.Component {
  render() {
    const runtimePanes = [{ menuItem: 'Refresher', render: () => <Tab.Pane>
        In algorithm, big-O is typically used to graph algorithm run time in proportion to input data size.<br/>

        When someone say big-O of something, they generally mean that an algorithm have run time similar to or
        never exceeds O(...)
    </Tab.Pane> }, {
      menuItem: 'Big-O Chart', render: () => <Tab.Pane>
        <Header as = 'h2' textAlign='center'>
            Different types of big-O and their relative data size vs. run time
        </Header>
        <Image src='images/big-o.jpg' centered />
      </Tab.Pane> }];
    return (
      <div>
        <Tab panes={runtimePanes}/>
      </div>
    );
  }
}
