import React from 'react';
import ReactDOM from 'react-dom';

const $portal = document.getElementById('portal');

class Popup extends React.Component {
  static defaultProps = {
    onConfirm: () => {},
    onCancel: () => {}
  };
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('$portal', $portal);
    this.$el = ReactDOM.findDOMNode(this);
  }

  onConfirm = () => {
    this.hide();
    console.log('datset: ', this.$el.dataset);
    this.$el.dataset.confirm = true;
    this.props.onConfirm();
  };

  hide() {
    this.$el.style.display = 'none';
  }

  onCancel = () => {
    this.hide();
    this.props.onCancel();
  };

  render() {
    const { children } = this.props;

    return ReactDOM.createPortal(
      <div id="popup" style={{ display: 'none' }}>
        <div>popup header</div>
        <div>{children}</div>
        <div>
          <button type="button" onClick={this.onCancel}>
            取消
          </button>
          <button type="button" onClick={this.onConfirm}>
            确定
          </button>
        </div>
      </div>,
      $portal
    );
  }
}

export default Popup;
