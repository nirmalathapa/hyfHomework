import React from "react";
import ReactDOM from "react-dom";
import "./components/index.css";
import SearchBox from "./components/SearchBox";
import Github from "./components/Github";
import { getGithubUser } from "./api.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
      error: null
    };
  }

  handleSearch = async query => {
    if (this.state.query === query){
      return;
    }

    this.setState({ loading: true });

    this.setState({
      users: await getGithubUser(query),
      query: query,
      loading: false
    });
  };

  render() {
    return (
      <div className="container">
        <header className="header">
          <h1>Github User Search</h1>
        </header>
        <section className="searchBox">
          <SearchBox handleSearch={this.handleSearch} />
        </section>
        <section className="contentDisplay">
          <Github users={this.state.users} loading={this.state.loading} />
        </section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
