import React from 'react';
import './index.js';


class SearchBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }      
  }
  
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handleKeyPress = (e) => {
    if(e.key==="Enter"){
      this.handleClick();
    }    
  }

  handleClick = () => {
   this.props.handleSearch(this.state.value) 
  }
  render(){
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
        <button type="submit" onClick={this.handleClick}>Search</button>
      </div>
  
    );  
  }
}

export default SearchBox;