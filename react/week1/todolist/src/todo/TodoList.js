import React from 'react';
import TodoItem from './TodoItem';


const TodoList = (props) => {
  return (
    <ul>
      {
        props.todoList.map((todo) => {
          return <TodoItem key={todo.id} todo= {todo.todo} finishDate={todo.finishDate}/>
        })
      }
    </ul>
  );

}


export default TodoList;