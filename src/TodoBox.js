import React, {Component} from 'react';
import {observer} from 'mobx-react';
import TodoItem from './TodoItem';

import DevTools from 'mobx-react-devtools';

@observer
export default class TodoBox extends Component {

  render() {
    const {todoStore} = this.props;
    console.log('render');
    return (
      <div>
        <DevTools />
        <ul>
          { /* 把 unfinishedTodos 换成 todos，点击修改标题就会在控制台打印 "render".*/ }
          {/*{todoStore.todos.map(*/}
            {/*(todo, index) => <li key={index}>{todo.title}</li>*/}
          {/*)}*/}
          { todoStore.todos.map((todo, index) => <TodoItem todo={todo} key={index} />)  }
        </ul>
        Progress: { todoStore.completedTodosCount }
        <div>
          <input type="button" onClick={() => {
            todoStore.changeTodoTitle({index: 0, title: "修改后的todo标题"});
          }} value="修改标题"/>
        </div>
      </div>
    )
  }
}