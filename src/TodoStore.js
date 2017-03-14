import {observable, action, computed, useStrict} from 'mobx';

// useStrict(true);

export default class TodoStore {
  @observable todos = [];

  @action changeTodoTitle({index, title}) {
    this.todos[index].title = title
  }

  @computed get unfinishedTodos() {
    return this.todos.filter((todo) => todo.done)
  }

  @computed get completedTodosCount() {
    return this.todos.filter((todo) => todo.done === true).length;
  }

  @action addTodo(task) {
    this.todos.push({task, done: false});
  }
}