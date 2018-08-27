import {connect} from 'react-redux';
import IndividualPostComponent from '../components/IndividualPostComponent';
import {deletePost} from '../actions';

import PropTypes from 'prop-types';

const mapStateToProps = (state, ownProps) => ({
  post: ownProps.post
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  removePost: () => dispatch(deletePost(ownProps.post.id))
})

const IndividualPostContainer = connect(mapStateToProps, mapDispatchToProps)(IndividualPostComponent);

IndividualPostContainer.propTypes = ({
  post: PropTypes.object.isRequired
});

export default IndividualPostContainer;
