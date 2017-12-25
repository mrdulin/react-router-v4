import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import * as t from './actionType';

const popupInitialState = {
  show: false,
  text: '',
  children: null,
  confirmCallback: null,
  cancelCallback: null,
  namespace: '',
  listeners: {
    // [namespace]: {
    // confirm: null,
    // cancel: null
    // }
  }
};

const rootReducer = combineReducers({
  Popup: (state = popupInitialState, action) => {
    switch (action.type) {
      case t.OPEN_POPUP:
        return Object.assign({}, state, action.payload, { show: true });
      case t.CLOSE_POPUP:
        return popupInitialState;
      case t.BIND_EVENT:
        const { namespace, confirm, cancel } = action.payload;
        const listeners = Object.assign({}, state.listeners, {
          [namespace]: { confirm, cancel }
        });
        const nextState = Object.assign({}, state, {
          listeners,
          namespace
        });
        return nextState;
      default:
        return state;
    }
  }
});

let middleware = applyMiddleware();

const store = createStore(
  rootReducer,
  process.env.NODE_ENV !== 'production'
    ? compose(
        middleware,
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    : middleware
);

export { store };
