import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {

  handleChangeValue(e) {
  }
  render() {
    return (
      <div className="bottom">
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
                onDelete={this.props.onDelete}
              />
            );
          })}
        </ul>
        </div>  
    );
  }
}

export default TodoList;
