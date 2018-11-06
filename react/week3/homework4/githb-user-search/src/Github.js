import React from 'react';

import User from './User'


export default class Github extends React.Component{  
  
  render(){
    return (
      <div>
      {this.props.users.map((el) => {
          return <User key={el.id} user={el} />
        })}
      </div>
    );
  }
}