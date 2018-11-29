import { connect } from 'react-redux';
import PerformancePage from './PerformancePage';

const mapStateToProps = state => ({
    user_channel: state.user_channel
  });
  
export default connect(
    null,
    mapStateToProps
)(PerformancePage);