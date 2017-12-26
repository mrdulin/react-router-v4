import React from 'react';
import Popup from '../../components/Popup';

class About extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.unblock = null;
    this.location = null;
    this.action = null;
  }
  componentDidMount() {
    const { history } = this.props;
    this.unblock = history.block(this.block);
  }
  componentWillUnmount() {
    this.unblock();
  }
  block = (location, action) => {
    console.log('history block: ', location, action);
    this.location = location;
    this.action = action;
    const allowTransition = !this.state.value;
    return JSON.stringify({ allowTransition, text: '' });
  };
  onConfirm = () => {
    // 这里无法unblock并跳转
    console.log('confirm');
  };
  onCancel = () => {
    console.log('cancel');
  };
  onChange = e => {
    const target = e.target;
    const value = target.value.trim();
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <h1>About Page</h1>
        <form>
          <input
            type="text"
            placeholder="随便输入"
            value={value}
            onChange={this.onChange}
          />
        </form>
        <div>
          <Popup
            children={<div>你确定要离开吗？</div>}
            onConfirm={this.onConfirm}
            onCancel={this.onCancel}
          />
        </div>
      </div>
    );
  }
}

export default About;
