import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./todo/TodoList";

const todoList =[
  {
    id: 1,
    todo: "Get out of bed,",
    finishDate: " Wed Sep 13 2017",
    done: false,
  },
  {
    id: 2,
    todo: "Brush teeth,",
    finishDate: " Thu Sep 14 2017",
    done: false
  },
  {
    id: 3,
    todo: "Eat breakfast,",
    finishDate: " Fri Sep 15 2017",
    done: false
  }
]


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      done: todoList.done,
    }
  }
 render() {
    return (
      <div className="container">
        <h1>todolist</h1>                
        <TodoList todoList={todoList} isDone={this.state.done} />
      </div>  
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
