import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./todo/TodoList";

const todoList = [
  {
    id: 1,
    todo: "Get out of bed,",
    finishDate: " Wed Sep 13 2017",
    done: false
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
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoList: todoList, value: '' };
  }

  handleToggle = id => {
    const foundIndex = this.state.todoList.findIndex(item => item.id === id);
    const newTodoList = [...this.state.todoList];
    newTodoList[foundIndex].done = !newTodoList[foundIndex].done;
    this.setState({ todoList: newTodoList });
  };

  handleDelete = id => {
    const index = this.state.todoList.findIndex(item => item.id === id);
    const newTodoList = [...this.state.todoList];
    newTodoList.splice(index, 1);
    this.setState({ todoList: newTodoList });
  };

  handleChangeValue = (e) => {
    this.setState({value: e.target.value});
  }

  handleAddTodo = () => {
    const arr = this.state.todoList;
    arr.push({id:Math.random(1), todo:this.state.value});    
    this.setState({todoList: arr})
    console.log(arr);    
  }
  render() {
    return (
      <div className="container">
        <h1>todolist</h1>
          <input type="text" onChange={this.handleChangeValue} value={this.state.value}/>
          <button className="addButton" onClick={this.handleAddTodo} >Add todo</button>
        {this.state.todoList.length === 0 ? (
          "No todos left"
        ) : (
          <TodoList
            todoList={this.state.todoList}
            onToggle={this.handleToggle}
            onDelete={this.handleDelete}
            onAdd={this.handleAddTodo}
          />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
