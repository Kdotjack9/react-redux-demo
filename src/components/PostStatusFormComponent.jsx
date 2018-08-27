import React from 'react';
import PropTypes from 'prop-types';

const PostStatusFormComponent = ({post, onChangeInput, addNewPost}) => (
  <div>
    <label htmlFor="post-status-input">
      Post Status;
    </label>
    <form className="form-group input-group" onSubmit={addNewPost}>
      <input
        id="post-status-input"
        type="text"
        placeholder="Post your status here."
        className="form-control"
        value={post}
        onChange={onChangeInput}
      />
    <span className="input-group-btn">
      <button type="submit" className="btn btn-default" disabled={!post}>
        Post
      </button>
    </span>
    </form>
  </div>
);

PostStatusFormComponent.displayName = "PostStatusFormComponent";

PostStatusFormComponent.propTypes = ({
  post: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  addNewPost: PropTypes.func.isRequired
});

export default PostStatusFormComponent;
