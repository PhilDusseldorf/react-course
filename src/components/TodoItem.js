import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    return (
        <div>
            <label className="todo-label">
                <input type="checkbox" checked={props.item.completed} />
                {props.item.task}
            </label><p />
        </div>
    );
}

export default TodoItem;