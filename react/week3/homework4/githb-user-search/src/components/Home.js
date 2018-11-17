import React from "react";
import SearchField from "./SearchField";
import UserList from "./UserList";
import { getGithubUser } from "./api";
import Navigation from "./Navigation";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      users: [],
      error: null,
      loading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(inputVal) {
    this.setState({
      searchQuery: inputVal
    });
  }

  handleClick() {
    const val = this.state.searchQuery;
    this.setState({ searchQuery: "", loading: true });
    return getGithubUser(val)
      .then(response => this.setState({ users: response, loading: false }))
      .catch(err => {
        this.setState({ error: "No Internet", loading: false });
      });
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-12 col-xl-8 mt-5">
              <div>
                <SearchField
                  inputVal={this.state.searchQuery}
                  onHandleChange={this.handleChange}
                  onHandleClick={this.handleClick}
                />
                <UserList
                  users={this.state.users}
                  error={this.state.error}
                  loading={this.state.loading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
