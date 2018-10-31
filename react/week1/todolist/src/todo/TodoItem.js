import React from "react";


class TodoItem extends React.Component {

  render(){
    return (
      <li>
        <input type="checkbox" onChange={this.handleChnage} value={this.props.done} name={this.props.todo}/>                
        {this.props.todo}{this.props.finishDate} 
      </li>
    );
  }  
}



export default TodoItem;
