import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import IndividualPostContainer from '../containers/IndividualPostContainer';

const PostsComponent = ({posts}) => (
  <ul className="list-group">
    {posts.size > 0 ? posts.toArray().map(
      post =>
        <IndividualPostContainer key={post.id} post={post}/>
    ).reverse() : (
      <div className="well">Post a status to view it here.</div>
    )}
  </ul>
);

PostsComponent.displayName = "PostsComponent";

PostsComponent.propTypes = ({
  posts: PropTypes.instanceOf(Immutable.OrderedMap).isRequired
});

export default PostsComponent;
