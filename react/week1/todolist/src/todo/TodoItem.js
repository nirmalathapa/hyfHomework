import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleComplete() {
    this.props.onToggle(this.props.id);
  }

  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.done}
          onChange={this.handleComplete}
        />

        <span className={this.props.done  === true ? "done" : "not-done"}>
          {this.props.todo} {this.props.finishDate}
        </span>
      </li>
    );
  }
}

export default TodoItem;
