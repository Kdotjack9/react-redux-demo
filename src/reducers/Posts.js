import Immutable from 'immutable';

let postId = 0;
export default(state = new Immutable.OrderedMap(), action) => {
  switch(action.type) {
    case 'DELETE_POST': {
      const postToRemove = action.postToRemove;
      return state.delete(postToRemove);
    }
    case 'ADD_POST': {
      const newPostText = action.post;
      const newPost = {id: postId++, text: newPostText, time: new Date().toLocaleTimeString()};
      return state.set(newPost.id, newPost);
    }
    default:
      return state;
  }
};
