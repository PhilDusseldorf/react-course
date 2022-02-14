import React from "react";

import TodoItem from "./components/TodoItem";

function App() {
    /*Todo App Part 1
    three hardcoded values for the todo:
 
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
    */
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
