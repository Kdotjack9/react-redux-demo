export default (state="", action) => {
  switch(action.type) {
    case "ADD_POST":
      return '';
    case "SET_STATUS_INPUT":
      return action.statusInputValue;
    default:
      return state;
  }
};
