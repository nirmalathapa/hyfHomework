import React from "react";

const User = props => {
  return (
    <li>
      <img src={props.user.avatar_url} alt="" />
      <a href={props.user.html_url} target="_blank" rel="noopener noreferrer">
        {props.user.login}
      </a>
    </li>
  );
};

export default User;
