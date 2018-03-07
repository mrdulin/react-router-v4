import { createStore, combineReducers } from 'redux';
import { AsyncComponentFactory } from 'common/components/AsyncComponent/index-v2';

import { appReducers } from './containers/app/reducer';

let rootReducerMap = {
  app: appReducers
};

const rootReducer = combineReducers(rootReducerMap);
const store = createStore(rootReducer);

const injectAsyncReducer = (name, reducer) => {
  if (!reducer) throw new Error('reducer不能为空');

  rootReducerMap = Object.assign({}, rootReducerMap, { [name]: reducer[name] });
  const reducers = combineReducers(rootReducerMap);
  store.replaceReducer(reducers);
  // console.log(store.getState());

  return store;
};

const asyncLoad = AsyncComponentFactory(injectAsyncReducer);

export { store, injectAsyncReducer, asyncLoad };
