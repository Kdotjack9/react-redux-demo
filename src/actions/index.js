import agent from 'superagent';

const _setActiveView = view => ({
  type: "SET_ACTIVE_VIEW",
  view
});

export const setStatusInput = statusInputValue => ({
  type: "SET_STATUS_INPUT",
  statusInputValue
});

const addPost = post => ({
  type: "ADD_POST",
  post
});

export const deletePost = postToRemove => ({
  type: "DELETE_POST",
  postToRemove
});

export const addNewPost = () => (dispatch, getState) => {
  const statusInputValue = getState().StatusInput;
  if(!statusInputValue) {
    return; //form validation would dispatch a different actionn here to post up an error message
  }
  dispatch(addPost(statusInputValue))
};

export const setActiveView = view => dispatch => {
  //dispatch fetchRepos here

  dispatch(_setActiveView(view));
};
