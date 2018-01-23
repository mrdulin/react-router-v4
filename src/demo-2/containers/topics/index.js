import React from "react";
import { Link, Route } from "react-router-dom";
import Topic from "./components/Topic";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Topics extends React.Component {
  static propTypes = {
    match: PropTypes.object,
    topicsReducers: PropTypes.object
  };

  render() {
    const { match } = this.props;
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>

        <p>{this.props.topicsReducers.name}</p>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route
          exact
          path={match.url}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }
}

export default connect(({ topicsReducers }) => ({ topicsReducers }))(Topics);
