import { connect } from 'react-redux';
import TaskDetail from './TaskDetail';
import { enrollTaskAsUser, newActivityLog } from '../../actions';

const mapDispatchToProps = dispatch => ({
  enroll: (user_id, task_id) => dispatch(enrollTaskAsUser(task_id, user_id)),
  newActivity: (user_id, task_id, event) =>
    dispatch(newActivityLog(task_id, user_id, event))
});

const mapStateToProps = state => ({
  user_id: state.auth.id
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetail);
