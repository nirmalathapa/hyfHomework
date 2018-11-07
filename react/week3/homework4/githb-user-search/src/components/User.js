import React from "react";

const User = props => {
  return (
    <div>
      <img src={props.user.avatar_url} alt="" width="50" height="50" />
      <a href={props.user.html_url} target="_blank" rel="noopener noreferrer">
        {props.user.login}
      </a>
    </div>
  );
};

export default User;
