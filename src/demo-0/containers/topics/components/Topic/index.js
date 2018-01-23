import React from "react";
import PropTypes from "prop-types";

const Topic = ({ match }) => {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
};

Topic.propTypes = {
  match: PropTypes.object.isRequired
};

export default Topic;
