import React from 'react';
import { Redirect } from 'react-router-dom';

import auth from '../../services/auth';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: false
    };
  }
  githubAuthenticate = () => {
    auth
      .authenticate()
      .then(() => {
        this.setState({ redirectToReferrer: true });
      })
      .catch(e => {
        console.log(e);
      });
  };
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        {/* <form onSubmit={this.onSubmit}>
          <div>
            <input type="text" placeholder="用户名/邮箱/手机号" />
          </div>
          <div>
            <input type="password" placeholder="6-20位密码" />
          </div>
          <div>
            <button type="submit">登录</button>
          </div>
        </form> */}
        <a onClick={this.githubAuthenticate}>Github</a>
      </div>
    );
  }
}

export default Login;
