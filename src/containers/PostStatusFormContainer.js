import {connect} from 'react-redux';
import PostStatusFormComponent from '../components/PostStatusFormComponent';
import {setStatusInput, addNewPost} from "../actions";

const mapStateToProps = state => ({
  post: state.StatusInput
});

const mapDispatchToProps = dispatch => ({
  onChangeInput: event => dispatch(setStatusInput(event.target.value)),
  addNewPost: event => {
    event.preventDefault();

    dispatch(addNewPost());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostStatusFormComponent);
