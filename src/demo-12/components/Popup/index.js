import React from 'react';
import ReactDOM from 'react-dom';

const $portal = document.getElementById('portal');
class Popup extends React.Component {
  static allowTransitionCallback = () => {};

  static show = () => {
    Popup.$el.style.display = 'block';
  };
  static hide = () => {
    Popup.$el.style.display = 'none';
  };
  static $el = null;

  static defaultProps = {
    content: null,
    header: null,
    footer: {},
    onConfirm: () => {},
    onCancel: () => {}
  };

  constructor() {
    super();
    this.buttons = [
      {
        text: '取消',
        onClick: this.onCancel
      },
      {
        text: '确定',
        onClick: this.onConfirm
      }
    ];
  }

  componentDidMount() {
    Popup.$el = ReactDOM.findDOMNode(this);
  }

  onConfirm = () => {
    console.log('popup onConfirm');
    Popup.hide();
    this.props.onConfirm();
  };

  onCancel = () => {
    Popup.hide();
    this.props.onCancel();
  };

  hasFooterButtons() {
    const { footer } = this.props;
    return footer.buttons && footer.buttons.length > 0;
  }

  wrapperClick = rawClick => () => {
    Popup.hide();
    rawClick && rawClick();
  };

  render() {
    const { content, header, footer } = this.props;
    const hasFooterButtons = this.hasFooterButtons();
    if (hasFooterButtons) {
      this.buttons = footer.buttons;
    }

    return ReactDOM.createPortal(
      <div id="popup" style={{ display: 'none' }}>
        {header ? <div className="popup-header">header</div> : null}
        <div className="popup-content">{content}</div>
        <div className="popup-footer">
          {this.buttons.map((button, idx) => {
            const onClick = hasFooterButtons
              ? this.wrapperClick(button.onClick)
              : button.onClick;
            return (
              <button
                onClick={onClick}
                key={idx}
                type="button"
                disabled={button.disabled}
              >
                {button.text}
              </button>
            );
          })}
        </div>
      </div>,
      $portal
    );
  }
}

export default Popup;
