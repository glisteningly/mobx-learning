import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
export default class TodoItem extends Component {
  render() {
    const { todo } = this.props;
    return (
      <li onDoubleClick={this.onRename}>
        <input
          type="checkbox"
          checked={ todo.done }
          onChange={ this.onToggleCompleted }
        />
        { todo.task }
      </li>
    );
  }
  onToggleCompleted = () => {
    const todo = this.props.todo;
    todo.done = !todo.done;
  }
  onRename = () => {
    const todo = this.props.todo;
    todo.task = prompt('Task name', todo.task) || "";
  }
}