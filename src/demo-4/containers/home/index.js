import React from 'react';
import { Link } from 'react-router-dom';
import LoadCardComponent from '../../components/Card';

export default class extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      Card: null
    };
  }

  componentWillMount() {
    LoadCardComponent().then(({ Card }) => {
      this.setState({ Card });
    }).catch(e => {
      const Card = <div>Card组件加载失败</div>
      this.setState({ Card });
    });
  }

  render() {
    const { Card } = this.state;
    return (
      <div>
        <h2>Home</h2>

        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
          <li><Link to='/contact'>contact</Link></li>
        </ul>

        {
          Card ? <Card /> :
            <p>Card加载中</p>
        }
      </div>
    );
  }
}
