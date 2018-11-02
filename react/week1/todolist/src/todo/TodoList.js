import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {

    return (
      <ul>
        {this.props.todoList.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              finishDate={todo.finishDate}
              done={todo.done}
              onToggle={this.props.onToggle}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
