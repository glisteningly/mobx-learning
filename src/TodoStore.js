import {observable, action, computed,useStrict} from 'mobx';

useStrict(true);

export default class TodoStore {
  @observable todos = [
    {
      title: "todo标题",
      done: false,
    },
    {
      title: "已经完成 todo 的标题",
      done: true,
    }];

  @action changeTodoTitle({index, title}) {
    this.todos[index].title = title
  }

  @computed get unfinishedTodos() {
    return this.todos.filter((todo) => todo.done)
  }
}