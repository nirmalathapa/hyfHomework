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
              todo={todo.todo}
              finishDate={todo.finishDate}
              done={todo.done}            
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
