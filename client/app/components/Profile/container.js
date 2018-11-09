import { connect } from 'react-redux';
import Profile from './Profile';

const mapStateToProps = state => ({
  currentTaskPage: state.currentTaskPage
});

export default connect(mapStateToProps)(Profile);
