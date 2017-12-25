import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as popupActionCreators from '../../actions/popup';
import './style.css';

class Popup extends React.PureComponent {
  static defaultProps = {
    actions: {},
    show: false,
    text: '',
    namespace: '',
    children: null,
    cancelCallback: () => {},
    confirmCallback: () => {}
  };
  constructor() {
    super();
  }

  onCancel = () => {
    const { actions, cancelCallback, listeners, namespace } = this.props;
    const { cancel } = listeners[namespace];
    cancel && cancel();
    cancelCallback();
    actions.close();
  };

  onConfirm = () => {
    const { actions, confirmCallback, listeners, namespace } = this.props;
    const { confirm } = listeners[namespace];
    confirm && confirm();
    confirmCallback();
    actions.close();
  };

  render() {
    const { actions, show, text, children } = this.props;
    if (!show) return null;
    return (
      <div className="popup">
        <div className="popup-inner">
          <div className="popup-header">
            <h1>popup title</h1>
          </div>
          <div className="popup-content">
            <p>{this.props.children || this.props.text}</p>
          </div>
          <div className="popup-footer">
            <button type="button" onClick={this.onCancel}>
              取消
            </button>
            <button type="button" onClick={this.onConfirm}>
              确认
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  state => ({ ...state.Popup }),
  dispatch => ({
    actions: bindActionCreators(
      Object.assign({}, popupActionCreators),
      dispatch
    )
  })
)(Popup);
