import React from 'react';
import Popup from '../../components/Popup';
import PT from 'prop-types';

class About extends React.PureComponent {
  static propTypes = {
    history: PT.object
  };
  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.unblock = null;
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
    const allowTransition = !this.state.value;
    return JSON.stringify({ allowTransition, text: '' });
  };
  onConfirm = () => {
    console.log('confirm', Popup.allowTransitionCallback);
    setTimeout(() => {
      Popup.allowTransitionCallback(true);
    }, 1000);
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
            content={<div>你确定要离开吗？</div>}
            onConfirm={this.onConfirm}
            onCancel={this.onCancel}
          />
        </div>
      </div>
    );
  }
}

export default About;
