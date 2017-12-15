import React from 'react';

class About extends React.Component {
  componentDidMount() {
    this.redirect();
  }

  redirect() {
    const { match } = this.props;
    console.log('redirect', match.url);
    localStorage.setItem('demo-5$hash', '#' + match.url);
    window.location.replace('//www.baidu.com');
  }

  render() {
    return (
      <div>
        <p>about</p>
      </div>
    );
  }
}
export default About;
