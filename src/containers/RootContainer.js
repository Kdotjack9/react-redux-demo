import {connect} from 'react-redux';
import RootComponent from '../components/RootComponent';

const mapStateToProps = state => ({
  activeView: state.ActiveView,
  myName: `${process.env.NAME}`
});

export default connect(mapStateToProps)(RootComponent);
