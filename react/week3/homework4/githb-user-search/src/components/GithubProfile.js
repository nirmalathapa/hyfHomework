import React from "react";
import { getSingleGithubUser } from "./api";
import { Link } from "react-router-dom";

class GithubProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  componentDidMount() {
    const link = this.props.match.params.id;
    getSingleGithubUser(link)
      .then(response => this.setState({ user: response}))
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="row justify-content-md-center">
      <div className="col-sm-2 mt-4 pr-2">
      <div class="card" style={{width: '18rem'}}>
          <img className="card-img-top" src={this.state.user.avatar_url} alt="profile avatar"/>
          <div className="card-body">
            <h3>{this.state.user.name}</h3>
            <span>Location: {this.state.user.location}</span>
            <h4>Followers: {this.state.user.followers}</h4>
            <span>Repos: {this.state.user.public_repos}</span>
            <Link to="/">
              <p>Go Back</p>
            </Link>
          </div>
        </div>
      </div>
      </div>
      
    );
  }
}

export default GithubProfile;
