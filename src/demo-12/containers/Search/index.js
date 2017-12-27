import React from 'react';
import Popup from '../../components/Popup';

class Search extends React.PureComponent {
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
    const allowTransition = !this.state.value;
    return JSON.stringify({ allowTransition, text: '' });
  };
  onConfirm = () => {
    setTimeout(() => {
      Popup.allowTransitionCallback(true);
    }, 1000);
  };
  onCancel = () => {
    console.log('cancel');
    Popup.allowTransitionCallback(false);
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
        <h1>Search Page</h1>
        <form>
          <input
            type="search"
            placeholder="随便搜索"
            value={value}
            onChange={this.onChange}
          />
        </form>
        <div>
          <Popup
            content={<div>你确定要离开当前页面吗？</div>}
            footer={{
              buttons: [
                { text: 'cancel', onClick: this.onCancel },
                { text: 'confirm', onClick: this.onConfirm }
              ]
            }}
          />
        </div>
      </div>
    );
  }
}

export default Search;
