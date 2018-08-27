import React from 'react';
import PropTypes from 'prop-types';

const IndividualPostComponent = ({post, removePost}) => (
  <li className="list-group-item">
    {post.text}
    <button type="button" className="close" onClick={removePost}>
      <span className="fa fa-times-circle"/>
    </button>
    <span className="badge">{post.time}</span>
  </li>
);

IndividualPostComponent.displayName = 'IndividualPostComponent';

IndividualPostComponent.propTypes = ({
  post: PropTypes.object.isRequired,
  removePost: PropTypes.func.isRequired
});

export default IndividualPostComponent;
