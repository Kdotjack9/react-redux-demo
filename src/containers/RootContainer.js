import {connect} from 'react-redux';
import RootComponent from '../components/RootComponent';

const mapStateToProps = state => ({
  myName: `${process.env.NAME}`
});

export default connect(mapStateToProps)(RootComponent);
