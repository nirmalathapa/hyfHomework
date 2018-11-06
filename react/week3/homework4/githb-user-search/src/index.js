import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBox from './SearchBox';
import Github from './Github';
import { getGithubUser } from './api.js';



class App extends React.Component{
  constructor(props){
  super(props);
  this.state = {
    users: []
  }

  } 

  handleSearch = async (query) =>{
    if(this.state.query === query){
      return;
    }
    this.setState({
      users: await getGithubUser(query),
      query: query
    });
  }
  

  render(){
    return (
      <div className="container">
        <header className="header">
          <h1>Github User Search</h1>
        </header>
        <section className="searchBox">
          <SearchBox handleSearch={this.handleSearch}/>
        </section>        
        <section className="contentDisplay">
          <Github users={this.state.users} />
        </section>
      </div>
    );
  }
}





ReactDOM.render(<App />, document.getElementById('root'));

