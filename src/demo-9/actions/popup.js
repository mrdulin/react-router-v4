import * as t from '../actionType';

const open = payload => ({
  type: t.OPEN_POPUP,
  payload
});

const close = () => ({ type: t.CLOSE_POPUP });

const bindEvent = (namespace, { confirm, cancel }) => ({
  type: t.BIND_EVENT,
  payload: {
    namespace,
    confirm,
    cancel
  }
});

export { open, close, bindEvent };
