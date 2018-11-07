import React from "react";
import User from "./User";

export default class Github extends React.Component {
  render() {
    const {loading, error, users} = this.props;
    if(loading) return <p>loading..</p>;
    else if(error) return <p>error</p>;
    else if(users < 1) return <p>error</p>;
    else{
    return (
      <div>        
        {this.props.users.map(el => {
          return <User key={el.id} user={el} />;
        })}
      </div>
    );
    }
  }
}
