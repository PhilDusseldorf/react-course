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
2. Render an ObjectivesApp Component defined in a seperate file
3. Inside ObjectivesApp, render:
  a. a Navbar component
  b. a MainContent component
  c. a Footer component

  import React from "react";
  import ReactDOM from "react-dom";
  import ObjectivesApp from "./objectives/ObjectivesApp"
  
  ReactDOM.render(<ObjectivesApp />, document.getElementById('root'));
  */

/* Todo App Part 1:
1. Setup the react app from scratch
2. Render an App Component
3. Create the App component from scratch
4. Have the <App /> component render 3 or 4 checkBoxes with paragraphs or spams next to it like you're making a todo list with some hard-coded items on it

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById('root'));
*/

/* Objective 4: PROPS
1. Setup the react app from scratch.
2. Render an ObjectivesApp Component defined in a seperate file
3. Inside ObjectivesApp, render 4 <Joke /> components
  a. each Joke has a "question" and a "punchline" property
4. Handle jokes that only deliver a punchline. Do not show empty questions
*/

/* 
import React from "react";
import ReactDOM from "react-dom";

import ObjectivesApp from "./objectives/ObjectivesApp";

ReactDOM.render(<ObjectivesApp />, document.getElementById('root'));
*/

/* Objective 5: MAPPING
Use standard index.js with the ObjectivesApp above
1. Create a productsData.js with products / do not forget a key
2. Create a <Produkt /> component
3. Render all components to the screen / use the ".map()" method 
*/

/* Todo App Part 3:
1. import a JS-data-file to the App
2. use the .map() method to get the data
3. refactor the <Todo /> component to use the props from the data file
3. render the data to the screen

*/

/* Objective 6: STATE
1. make an ObjectivesApp class with a constructor
2. repair another funcion and make it into a class
 */

/* Todo App Part 6: STATE
1. make the checkbox change state from complete to incomplete by click
2. repair another funcion and make it into a class
 */

/* Objective 7: CONDITIONAL RENDERING
1. add state to a stateless functional component
2. have state keep track of if the user is logged in
3. add a button that logs the user in/out
4. change the button's text to "log in" or "log out" depending on state
5. render text that states if logged in or not

*/

import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";
// ReactDOM.render(<App />, document.getElementById('root'));

import ObjectivesApp from "./objectives/ObjectivesApp"
ReactDOM.render(<ObjectivesApp />, document.getElementById('root'));