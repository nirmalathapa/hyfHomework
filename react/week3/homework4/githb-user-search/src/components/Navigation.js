import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <nav className="site-nav family-sans navbar navbar-expand bg-dark navbar-dark higher">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Github User Search
          </Link>
          <div className="navbar-nav ml-auto">
              <Link className="nav-item nav-link" to="/about">
                About Me
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
