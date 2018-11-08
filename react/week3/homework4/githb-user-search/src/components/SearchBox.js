import React from "react";
import "../index.js";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      error: ""
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  handleClick = () => {
    if (this.state.value === "") {
      return this.setState({ error: "Please enter the user" });
    } else {
      this.setState({ value: "", error: "" });
    }
    this.props.handleSearch(this.state.value);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button type="submit" onClick={this.handleClick}>
          Search
        </button>
        <p>{this.state.error}</p>
      </div>
    );
  }
}

export default SearchBox;
