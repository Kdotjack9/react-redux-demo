import {connect} from 'react-redux';
import PostsComponent from '../components/PostsComponent';
import {deletePost} from '../actions';

const mapStateToProps = state => ({
  posts:state.Posts
});

const mapDispatchToProps = dispatch => ({
  removePost: event => {
    event.preventDefault();
    dispatch(deletePost(Number(event.currentTarget.dataset.post)));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsComponent)
