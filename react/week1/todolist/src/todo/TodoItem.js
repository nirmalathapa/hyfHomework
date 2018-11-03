import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleComplete() {
    this.props.onToggle(this.props.id);
  }

  handleDelete() {
    this.props.onDelete(this.props.id);
  }

  render() {
    return (
      <li>        
        <input
          type="checkbox"
          checked={this.props.done}
          onChange={this.handleComplete}
        />
        <span className={this.props.done === true ? "done" : "not-done"}>
          {this.props.todo} {this.props.finishDate}
        </span>
        <button className="delete" onClick={this.handleDelete}>X</button>
      </li>
    );
  }
}

export default TodoItem;
