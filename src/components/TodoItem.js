import React, {Component} from "react";
import './TodoItem.css';

class TodoItem extends Component {
    return() {
        <div>
            <label className="todo-label">
                <input type="checkbox" checked={this.props.item.completed} />
                {this.props.item.task}
            </label><p />
        </div>
    }
}

export default TodoItem;