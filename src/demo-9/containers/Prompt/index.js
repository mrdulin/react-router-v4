import React from 'react';
import { Prompt } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as popupActionCreators from '../../actions/popup';

class PromptPage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      enabledBlock: true
    };
    this.unblock = null;
  }

  componentDidMount() {
    console.log(this.props);
    const { actions, history } = this.props;
    const namespace = 'PromptPage';

    //使用history对象的block方法，效果和使用<Prompt>组件一样
    //可以调用history.block返回的方法，禁用用户离开当前路由的提示
    // 1.
    // this.unblock = this.props.history.block('Are you sure you want to leave?');

    // 2.
    // this.unblock = history.block((location, action) => {
    //   console.log(location, action);
    //   if (!this.state.value) {
    //     //自定义处理逻辑
    //     actions.bindEvent(namespace, {
    //       confirm: this.onPopupConfirm,
    //       cancel: this.onPopupCancel
    //     });
    //     return JSON.stringify({ message: '你确定离开此页面吗', namespace });

    //     // 这里的思路是传递一个要显示的Popup的props对象到getUserConfirmation方法中，在getUserConfirmation方法中dispatch action打开popup
    //     // 然而，没有进入getUserConfirmation方法，貌似必须是字符串才可以传递过去，但如果用JSON.stringify，格式化出来的字符串中方法会被删除
    //     // return {
    //     //   text: '你确定离开此页面吗？',
    //     //   confirmCallback: this.onPopupConfirm,
    //     //   cancelCallback: this.onPopupCancel
    //     // };
    //   }
    // });
  }

  componentWillUnmount() {
    // this.unblock();
  }

  onPopupConfirm = () => {
    console.log('onPopupConfirm');
  };

  onPopupCancel = () => {
    console.log('onPopupCancel');
  };

  onInputChange = e => {
    const target = e.target;
    const value = target.value.trim();
    this.setState({ value });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };
  onBlockCheckBoxChange = () => {
    this.setState(prevState => {
      const enabledBlock = !prevState.enabledBlock;
      if (!enabledBlock) {
        this.unblock();
      }
      return { enabledBlock };
    });
  };
  render() {
    const { value, enabledBlock } = this.state;
    return (
      <div>
        <h1>Prompt page</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="随便输入"
            value={value}
            onChange={this.onInputChange}
          />
          <div>
            <label htmlFor="block-checkbox">开启block</label>
            <input
              type="checkbox"
              id="block-checkbox"
              checked={enabledBlock}
              onChange={this.onBlockCheckBoxChange}
            />
          </div>
        </form>

        {/* 默认地，Prompt将会使用HashRouter或者BrowserHistory的getUserConfirmation属性实现的弹框，getUserConfirmation默认地使用window.confirm */}
        {/* <Prompt message="Are you sure you want to leave?" /> */}

        {/* <Prompt
          message={location =>
            `Are you sure you want to go to ${location.pathname}?`
          }
        /> */}

        <Prompt
          when={!value}
          message={JSON.stringify({ message: '你确定离开此页面吗？' })}
        />
      </div>
    );
  }
}

export default connect(
  () => ({}),
  dispatch => ({
    actions: bindActionCreators(
      Object.assign({}, popupActionCreators),
      dispatch
    )
  })
)(PromptPage);
