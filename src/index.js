/* Objective 1:
1. Setup the react app from scratch.
2. Render an unordered List to the screen. The list should contain at least three items

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul>,
  document.getElementById('root'));
*/

/* Objective 2:
1. Setup the react app from scratch.
2. Create a functional component called MyInfo that returns the following UI:
  a. An h1 with your name
  b. A paragraph with a little blurb about yourself
  c. An ordered or unordered list of your top 3 vacation spots
3. Render that to the browser!

import React from 'react';
import ReactDOM from 'react-dom';

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

/* Objective 3
1. Setup the react app from scratch.
2. Render an App Component defined in a seperate file
3. Inside App, render:
  a. a Navbar component
  b. a MainContent component
  c. a Footer component
*/
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById('root'));