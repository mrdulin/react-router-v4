import React, { PureComponent } from 'react';

const moduleDefaultExport = module => module.default || module;

function asyncComponent(opts) {
  class AsyncComponent extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        Component: null
      };
    }

    componentDidMount() {
      if (opts && opts.loader) {
        opts.loader()
          .then(moduleDefaultExport)
          .then(Component => {
            if (this.props.location.pathname === '/contact') {
              return Promise.reject('模拟模块加载失败的情况');
            }
            this.setState({ Component });
          })
          .catch(e => {
            let Component = () => (<div>加载失败</div>);
            if (opts.loading) {
              Component = opts.loading;
            }
            this.setState({ Component })
          });
      }
    }

    render() {
      const { Component } = this.state;
      return (
        Component ?
          <Component {...this.props} /> :
          null
      )
    }
  }

  return AsyncComponent;
}

export {
  asyncComponent
}
