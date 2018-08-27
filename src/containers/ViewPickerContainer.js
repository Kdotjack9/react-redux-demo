import {connect} from 'react-redux';
import ViewPickerComponent from '../components/ViewPickerComponent';
import {setActiveView} from '../actions';

const mapStateToProps = state => ({
  activeView: state.ActiveView
});

const mapDispatchToProps = dispatch => ({
  changeView: event => {
    event.preventDefault();

    dispatch(setActiveView(event.currentTarget.dataset.view));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewPickerComponent);
