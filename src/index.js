import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

/* Objective 1:
Render an unordered List to the screen. The list should contain at least three items

ReactDOM.render(
  <ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul>,
  document.getElementById('root'));
*/

/* Objective 2:
Create a functional component called MyInfo that returns the following UI:
  a. An h1 with your name
  b. A paragraph with a little blurb about yourself
  c. An ordered or unordered list of your top 3 vacation spots
Render that to the browser!

function MyInfo() {
  return (
    <>
    <h1>Phil</h1>
    <p>
    I am learning JAVA for the OCA exam and now trying to learn react.js for my internship that is upcoming.
    </p>
    <ul>
    <li>Shanghai</li>
    <li>New York</li>
    <li>Mykonos</li>
    </ul>
    </>
    );
  }

  ReactDOM.render(<MyInfo />, document.getElementById('root'));
*/