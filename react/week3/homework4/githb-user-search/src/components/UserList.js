import React from "react";
import User from "./User";
import Error from "./Error";
import Loading from "./Loading";

class UserList extends React.Component {
  render() {
    const { users, error, loading } = this.props;
    if (!users) {
      return <Error error={error} />;
    } else if (loading) {
      return <Loading />;
    } else {
      return (
        <div className="row">
          {users.map(item => (
            <User
              key={item.id}
              login={item.login}
              img={item.avatar_url}
              link={item.id}              
            />
          ))}
        </div>
      );
    }
  }
}

export default UserList;
