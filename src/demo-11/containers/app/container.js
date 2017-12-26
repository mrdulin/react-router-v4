import React from 'react';

class Container extends React.Component {
  render() {
    const { header, footer, children, className, style } = this.props;
    return (
      <main className="main" style={style}>
        <header className="header">{header}</header>
        <article className={`content ${className}`}>{children}</article>
        <footer className="footer">{footer}</footer>
      </main>
    );
  }
}
export default Container;
