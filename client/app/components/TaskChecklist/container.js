import { connect } from 'react-redux';
import TaskChecklist from './TaskChecklist';
import { newActivityLog } from '../../actions';
import { Event } from '../../constants';

const mapStateToProps = state => ({
  user_id: state.auth.id
});

const mapDispatchToProps = dispatch => ({
  completeTask: (task_id, user_id) =>
    dispatch(newActivityLog(task_id, user_id, Event.FINISH))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskChecklist);
