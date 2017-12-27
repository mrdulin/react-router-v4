import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../services/auth';

class Home extends React.Component {
  signout = () => {
    const { history } = this.props;
    auth.signout().then(() => {
      history.push('/');
    });
  };
  render() {
    return (
      <div>
        <h2>Home</h2>
        {auth.user.name ? (
          <div>
            <p>
              你好，<Link to="/user">{auth.user.name}</Link>
            </p>
            <button type="button" onClick={this.signout}>
              退出登录
            </button>
          </div>
        ) : null}

        <ul>
          <li>
            <Link to="/user">用户中心</Link>
          </li>
          <li>
            <Link to="/about">关于我们</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
