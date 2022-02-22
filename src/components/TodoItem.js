import React, {Component} from "react";
import './TodoItem.css';

class TodoItem extends Component {
    render() {

        return(
            <div className="todo-label">
                <label style = {{color: this.props.item.completed ? "#fff" : "#000"}} >
                    <input 
                        type="checkbox"
                        checked={this.props.item.completed}
                        onChange={() => this.props.handleChange(this.props.item.id)}
                    />
                    {this.props.item.task}
                </label><p />
            </div>
        )
    }
}

export default TodoItem;