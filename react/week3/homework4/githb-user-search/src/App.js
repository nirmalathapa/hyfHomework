import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route } from "react-router-dom";
import GithubProfile from "./components/GithubProfile";
import About from "./components/About";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/:id" component={GithubProfile} />
          <Route exact path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
