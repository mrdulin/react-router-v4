import React from "react";
import queryString from "query-string";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    // react-router v4依赖https://github.com/ReactTraining/history
    // 获取和操作url一般是通过这个history对象，路由会给容器组件的props上注入location，match对象
    //通过这两个对象，不论是`BrowserHistory`，还是`HashHistory`，操作和获取url上参数等信息的方式是一致的。
    //但如果使用BOM原生api，例如window.location.hash, window.location.search，则`BrowserHistory`和`HashHistory`需要做不同的处理

    console.log("props: ", props);
    this.id = props.match.params.id;
    this.searchObj = queryString.parse(props.location.search);
    this.from = props.location.state.from;

    console.log(this.id, this.searchObj, this.from);
  }
  render() {
    return <h1>Detail</h1>;
  }
}
export default Detail;
