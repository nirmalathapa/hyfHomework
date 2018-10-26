import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const todoItemsCollection = [
  {
    id: 1,
    item: "Get out of bed",
    date: new Date(2017, 8, 13).toDateString()
  },
  {
    id: 2,
    item: "Brush teeth",
    date: new Date(2017, 8, 14).toDateString()
  },
  {
    id: 3,
    item: "Eat breakfast",
    date: new Date(2017, 8, 15).toDateString()
  }
];

const App = () => (
  <div className="container">
    <h2>todolist</h2>

    <List />
  </div>
);

const List = () => (
  <div className="list">
   {collection.map(el => <Item todoItem={el.item} date={el.date} />)}
  </div>
)

const Item = ({todoItem, date}) => <li>{todoItem}{date}</li>

// const Item = ({todoItem, date}) => (
//   <li>{todoItem}{date}</li>
// )

ReactDOM.render(<App />, document.getElementById("root"));
