import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route} from "react-router-dom";
import GithubProfile from "./components/GithubProfile";


class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home}></Route>          
          <Route exact path="/users/:id" component={GithubProfile}></Route>          
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
