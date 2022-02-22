
/*Todo App Part 1
three hardcoded values for the todo
import React from "react";

import TodoItem from "./components/TodoItem";
import todoData from "./components/todoData.js";

function App() {
return (
    <div>
    <label>
    <input type="checkbox" />
    Tomatoes
    </label><p />
        <label>
            <input type="checkbox" />
            Olive oil
        </label><p />
        <label>
        <input type="checkbox" />
        Flour
        </label><p />
        </div>
        );
*/

/* Todo App Part 2
create a <TodoItem /> component
at this point the items are dummies with the same values
 
Also I have to create the style of the page 
either using a CSS file or inline styles or both.
import React from "react";

import TodoItem from "./components/TodoItem";
import todoData from "./components/todoData.js";

function App() {
 
    const styles = {
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
};
 
return (
    <div style={styles}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </div>
);
}
 
export default App;
*/

// import the data from the todoData

/*
import React from "react";

import TodoItem from "./components/TodoItem";
import todoData from "./components/todoData.js";

function App() {
    const todoArray = todoData.map(data => <TodoItem key={data.id} item={data} />);
    
    const styles = {
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
    };
    
    return (
        <div style={styles}>
            {todoArray}
            </div>
            );
        }
        
        export default App;
*/


/*
 */
import React, { Component } from "react";

import TodoItem from "./components/TodoItem";
import todoData from "./components/todoData.js";
import "./App.css";

class App extends Component {

    constructor() {
        super();
        this.state = {
            todos: todoData
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        //console.log("changed ", id);
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        });
    }
    
    render() {
        const todoArray = this.state.todos.map(data => <TodoItem key={data.id} item={data} handleChange={this.handleChange} />);

        return (
            <div className="d-flex">
                {todoArray}
            </div>
        )
    }
}

export default App;
