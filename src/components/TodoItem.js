import React, {Component} from "react";
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        return(
            <div className="todo-label">
                <label >
                    <input type="checkbox" checked={this.props.item.completed} />
                    {this.props.item.task}
                </label><p />
            </div>
        )
    }
}

export default TodoItem;