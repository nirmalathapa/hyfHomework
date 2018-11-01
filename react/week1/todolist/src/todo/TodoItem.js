import React from "react";

class TodoItem extends React.Component {
  constructor(props){
    super(props);
    this.state={
      done: false
    }
    this.handleComplete = this.handleComplete.bind(this);
  }
  handleComplete(e){
    const complete = e.target.checked;
    if(complete){
      this.setState({
        done: true
      })
    }
  }
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.complete}
          onChange={this.handleComplete}
        />
        {this.props.todo}
        {this.props.finishDate}
      </li>
    );
  }
}

export default TodoItem;
