import React from 'react';

class About extends React.Component {
  componentDidMount() {
    this.redirect();
  }

  redirect() {
    const { match } = this.props;
    const domains = {
      baidu: '//www.baidu.com',
      localhost: '//10.0.77.189:2223/测试微信应用间跳转问题/app-3'
    };
    console.log('redirect', match.url);
    localStorage.setItem('demo-5$hash', '#' + match.url);

    window.location.replace(domains.localhost);
    // window.location.replace(domains.localhost);
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
