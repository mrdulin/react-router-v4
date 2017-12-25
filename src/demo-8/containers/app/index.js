import React from 'react';
import { Link } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import createBrowserHistory from 'history/createBrowserHistory';

class App extends React.Component {
  constructor() {
    super();
    this.unlisten = null;
  }
  componentDidMount() {
    // const history = createHashHistory();
    const history = createBrowserHistory();
    const location = history.location;
    console.log('current location: ', location);

    this.unlisten = history.listen((location, action) => {
      console.log(action, location);

      //应用是HashRouter,使用createHashHistory，location变化时(即pathname, search, hash, state任意一个发生变化)，log输出如下:
      //POP {pathname: "/about", search: "", hash: "", state: undefined}
      //POP {pathname: "/", search: "", hash: "", state: undefined}

      //应用是HashRouter,使用createBrowserHistory, location变化时，log输出如下：
      //POP {pathname: "/", search: "", hash: "#/about", state: undefined}
      //POP {pathname: "/", search: "", hash: "#/?source=app", state: undefined}
      //POP {pathname: "/", search: "", hash: "#/", state: undefined}

      //因此：要注意使用与应用的路由相匹配的createXXXXHistory方法
      //location.state只支持createBrowserHistory和createMemoryHistory，不支持HashHistory, 这就是为什么上面location变化时，state始终是undefined的原因。
      //action是PUSH, REPLACE, POP中的一个
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/',
                search: '?source=app'
              }}
            >
              改变location中的search，测试history.listen事件是否触发(测试结果：会触发)
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/',
                state: { source: 'app' }
              }}
            >
              改变location中的state，测试history.listen事件是否触发(测试结果：会触发)
            </Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
