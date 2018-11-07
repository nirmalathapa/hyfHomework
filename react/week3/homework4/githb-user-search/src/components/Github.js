import React from "react";
import User from "./User";

export default class Github extends React.Component {
  render() {
    const {loading} = this.props;
    if(loading) return <p>loading..</p>;
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
