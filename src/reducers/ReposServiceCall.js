import Immutable from 'immutable';

const ReposServiceCallRecord = Immutable.Record({
  isFetching: false,
  hasFailed: false,
  repos: undefined
});

export default (state = new ReposServiceCallRecord(), action) => {
  switch(action.type) {
    case "FETCHING_REPOS":
      return new ReposServiceCallRecord({isFetching: true});
    default:
      return state;
  }
};
