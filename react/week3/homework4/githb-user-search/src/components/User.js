import React from "react";
import { Link } from "react-router-dom";

class User extends React.Component {
  render() {
    const imageLink = this.props.link;
    return (
      <div className="col-sm-4 mt-4 pr-2">
        <div className="card">
          <Link to={`/users/${imageLink}`}>
            <img
              className="card-img-top"
              src={this.props.img}
              alt="Github avatar"
            />
          </Link>
          <div className="card-body">{this.props.login}</div>
        </div>
      </div>
    );
  }
}
export default User;
