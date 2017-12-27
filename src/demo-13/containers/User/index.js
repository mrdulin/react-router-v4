import React from 'react';
import auth from '../../services/auth';

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      user: auth.user
    };
  }
  render() {
    const { user } = this.state;
    return (
      <div>
        <p>
          用户名：<span>{user.name}</span>
        </p>
        <p>
          简介： <span>{user.bio}</span>
        </p>
      </div>
    );
  }
}

export default User;
