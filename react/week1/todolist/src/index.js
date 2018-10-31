import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./todo/TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      todoList:[
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
     };
  }

  handleChnage(e){
    const check = this.state.done
    this.setState({
      [check]: "adf"
    })
  }
  
 render() {
    const { todoList } = this.state;
    return (
      <div className="container">
        <h1>todolist</h1>        
        <TodoList todoList={todoList} />
      </div>  
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
