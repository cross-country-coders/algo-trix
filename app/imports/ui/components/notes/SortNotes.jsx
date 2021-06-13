import React from 'react';
import { Container, Image, Tab } from 'semantic-ui-react';

class SortNotes extends React.Component {
  render() {
    const proofPanes = [
      { menuItem: 'Insertion Sort', render: () => <Tab.Pane>
        <b>Steps to Insertion Sort</b>: to sort an array of size n in ascending order.
        <ol>
          <li>Iterate from arr[1] to arr[n] over the array</li>
          <li>Compare the current element to its predecessor.</li>
          <li>If the key element is smaller than its predecessor compare it to the element before.
          Move the greater element one position up to make space for the swapped element.</li>
        </ol>
        <ul>
          <li>Best Case RunTime: O(n)</li>
          <li>Worst Case RunTime: O(n^2)</li>
        </ul>
        <Container textAlign='center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JU767SDMDvA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Container>
      </Tab.Pane> },
      { menuItem: 'Bubble Sort', render: () => <Tab.Pane>
          Simplest algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
          Compare the current element and if the next element is not in order then swap it.
        <Container textAlign='center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/xli_FI7CuzA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Container>
      </Tab.Pane> },
      { menuItem: 'Selection Sort ', render: () => <Tab.Pane>
         Sorts an array by repeatedly finding the minimum elemet (assuming the array is being sorted in ascending order)
          from the unsorted array and place it in the beginning.
        <b>The RunTime</b> O(n lg n)
        <Container textAlign='center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/g-PGLbMth_g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Container>
      </Tab.Pane> },
      { menuItem: 'Merge Sort', render: () => <Tab.Pane>
          A divide and conquer algorithm. Divides the input array into two halves and calls itself for the two halves.
        <ol>
          <li>Find the middle point to divide the array into two</li>
          <li> Call merge sort for the first half</li>
          <li> Call merge sort for the second half</li>
          <li> Merge the two halves sorted in the previous steps</li>
        </ol>
        <b>The RunTime</b> O(n lg n)
        <Container textAlign='center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/4VqmGXwpLqc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Container>
      </Tab.Pane> },
      { menuItem: 'Radix Sort ', render: () => <Tab.Pane><ul>
        <li>A sorting algorithm that sorts from least to most significant digits</li>
        <li>Runtime: O(d(n+k))</li>
      </ul>
      <b>Sample Run Down of Radix Sort</b>
      {/* eslint-disable-next-line max-len */}
      <Container textAlign='center'> <iframe width="560" height="315" src="https://www.youtube.com/embed/XiuSW_mEn7g" title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe></Container></Tab.Pane> },
    ];
    return (
      <div>
        <Tab panes = {proofPanes}/>
      </div>
    );
  }
}

export default SortNotes;
