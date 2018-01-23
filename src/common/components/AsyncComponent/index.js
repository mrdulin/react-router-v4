import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const moduleDefaultExport = module => module.default || module;

function asyncComponent(opts) {
  class AsyncComponent extends PureComponent {
    static propTypes = {
      location: PropTypes.object
    };
    constructor(props) {
      super(props);

      this.state = {
        Component: null,
        error: false
      };
    }

    componentDidMount() {
      if (opts && opts.loader) {
        opts
          .loader()
          .then(moduleDefaultExport)
          .then(Component => {
            if (this.props.location.pathname === "/contact") {
              return Promise.reject("模拟模块加载失败的情况");
            }
            this.setState({ Component });
          })
          .catch(error => {
            this.setState({ error });
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
      return Component ? <Component {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}

export { asyncComponent };
