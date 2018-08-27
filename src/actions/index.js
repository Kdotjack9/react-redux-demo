import agent from 'superagent';

const _setActiveView = view => ({
  type: "SET_ACTIVE_VIEW",
  view
});

export const setActiveView = view => dispatch => {
  //dispatch fetchRepos here

  dispatch(_setActiveView(view));
};
