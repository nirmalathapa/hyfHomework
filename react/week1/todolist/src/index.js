import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const todoItemsCollection = [
  {
    item: "Get out of bed", 
    date: new Date(2017, 8, 13).toDateString()
  },
  {
    item: "Brush teeth", 
    date: new Date(2017, 8, 14).toDateString()
  },
  {
    item: "Eat breakfast", 
    date: new Date(2017, 8, 15).toDateString()
  }
];

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <h2>todolist</h2>
        <List/>
      </div>
    );
  }
}

class List extends React.Component{
  render(){    
    return(
      <div className="list">
         { todoItemsCollection.map((el) => {
              return <Item todoItem={`${el.todoItem},`} date={el.date}/>
          })}
      </div>
    );
  }
}

class Item extends React.Component{
  render(){
    return(
      <div>
        <li>{this.props.todoItem}{this.props.date}</li>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

