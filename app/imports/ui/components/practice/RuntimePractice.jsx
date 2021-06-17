import React from 'react';
import { Tab, Modal, Button, Segment } from 'semantic-ui-react';

export default class RuntimePractice extends React.Component {
  render() {
    const panes = [
      { menuItem: 'Example 1', render: () => <Tab.Pane>
        Assume a list with a head and tail
        <Segment inverted>
          def someFunction(data: list):<br/>
          &emsp;list.append(<q>hello</q>)
        </Segment>
        <Modal
          trigger={<Button fluid>Show Answer</Button>}
          actions={[{ key: 'done', content: 'Done', positive: true }]}
          header='Solution to Example 1'
          content='O(1). We are keeping track of tail, appending item to the back of the array would be O(1), recall
          the Node list ADT. No matter what size array we give to this function, it will only perform that one action.'/>
      </Tab.Pane> },
      { menuItem: 'Example 2', render: () => <Tab.Pane>
          Assume all input will be sorted in ascending order
        <Segment inverted>
            def fastSearch(data: list, start: int, end: int, target):<br/>
            &emsp;if start &gt; end:<br/>
            &emsp;&emsp;return -1<br/><br/>
            &emsp;mid = round((start + end) / 2)<br/><br/>
            &emsp;if data[mid] == target:<br/>
            &emsp;&emsp;return mid<br/>
            &emsp;elif target &lt; data[mid]:<br/>
            &emsp;&emsp; return fastSearch(data, start, mid - 1, target)<br/>
            &emsp;else:<br/>
            &emsp;&emsp; return fastSearch(data, mid + 1, end, target)
        </Segment>
        <Modal
          trigger={<Button fluid>Show Answer</Button>}
          actions={[{ key: 'done', content: 'Done', positive: true }]}
          header='Solution to Example 2'
          content='O(log(n)). Notice how the problem is being split into half each iteration / recursion, which is
          the usual pattern of a O(log(n)...) algorithms. Yes, this is the code for a binary search.'/>
      </Tab.Pane> },
      { menuItem: 'Example 3', render: () => <Tab.Pane>
        Assume a list with a head and tail
        <Segment inverted>
            def idkMan(data: list):<br/>
            &emsp;returnVal = 0<br/><br/>
            &emsp;for i in range(1, 250):<br/>
            &emsp;&emsp;returnVal += i<br/>
            &emsp;&emsp;for k in range(1, i):<br/>
            &emsp;&emsp;&emsp;returnVal /= k<br/><br/>
            &emsp;list.append(returnVal)
        </Segment>
        <Modal
          trigger={<Button fluid>Show Answer</Button>}
          actions={[{ key: 'done', content: 'Done', positive: true }]}
          header='Solution to Example 3'
          content='O(1) ! Similar reasoning to Example 1, notice how the two loops are all bounded by a set constant.
          No matter what our input size is, it is always going to run the same amount of time. Some compiler may be
          smart enough to recognize this and just do the calculation at compile and replace those complicated looking
          code with the result!'/>
      </Tab.Pane> },
      { menuItem: 'Example 4', render: () => <Tab.Pane>
        <Segment inverted>
            def waiting(data: list):<br/>
            &emsp;for i in range(0, len(data) - 1):<br/>
            &emsp;&emsp;for k in range(0, len(data) - i - 1):<br/>
            &emsp;&emsp;&emsp;if data[k] &gt; data[k + 1]:<br/>
            &emsp;&emsp;&emsp;&emsp;temp = data[k]<br/>
            &emsp;&emsp;&emsp;&emsp;data[k] = data[k + 1]<br/>
            &emsp;&emsp;&emsp;&emsp;data[k + 1] = temp
        </Segment>
        <Modal
          trigger={<Button fluid>Show Answer</Button>}
          actions={[{ key: 'done', content: 'Done', positive: true }]}
          header='Solution to Example 4'
          content='O(n^2). This is the code for bubble sort!'/>
      </Tab.Pane> },
    ];
    return (<Tab panes={panes}/>);
  }
}
