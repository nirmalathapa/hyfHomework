import React from "react";
import User from "./User";

export default class Github extends React.Component {
  render() {
    const { loading, users } = this.props;
    if (loading) return <span>Loading...</span>;
    else if (!users) return <p />;
    else {
      return (
        <ul>
          {this.props.users.map(el => {
            return <User key={el.id} user={el} />;
          })}
        </ul>
      );
    }
  }
}
