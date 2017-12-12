import React, { PureComponent } from 'react';

const moduleDefaultExport = module => module.default || module;

export default function AsyncComponentFactory(injectAsyncReducer) {
  return function asyncComponent(opts) {
    class AsyncComponent extends PureComponent {
      constructor(props) {
        super(props);

        this.state = {
          Component: null,
          error: false
        };
      }

      componentDidMount() {
        if (opts) {
          const { loader, reducers } = opts;
          Promise.all([this.loadReducer(reducers), this.loadComponent(loader)])
            .then(([_, Component]) => {
              if (this.props.location.pathname === '/contact') {
                return Promise.reject('模拟模块加载失败的情况');
              }
              this.setState({ Component });
            })
            .catch(error => {
              this.setState({ error });
            });

        }
      }

      loadComponent(loader) {
        return loader()
          .then(moduleDefaultExport);
      }

      loadReducer(reducer) {
        if (Array.isArray(reducer)) {
          return Promise.all(reducer.map(r => this.loadReducer(r)));
        } else if (typeof reducer === 'object') {
          const key = Object.keys(reducer)[0];
          return reducer[key]().then(r => {
            injectAsyncReducer(key, moduleDefaultExport(r));
          });
        }
      }

      render() {
        const { Component, error } = this.state;
        if (error) {
          return React.createElement(opts.loading, {
            error
          });
        }
        return (
          Component ?
            <Component {...this.props} /> :
            null
        )
      }
    }

    return AsyncComponent;
  }
}


export {
  AsyncComponentFactory
}
