import React from 'react';

class About extends React.Component {
  componentDidMount() {
    this.redirect();
  }

  redirect() {
    const { match } = this.props;
    const domains = {
      baidu: '//www.baidu.com',
      localhost: '//localhost:2223'
    };
    console.log('redirect', match.url);
    // localStorage.setItem('demo-5$hash', '#' + match.url);

    // window.location.replace(domains.baidu);
    window.location.replace(domains.localhost);
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
