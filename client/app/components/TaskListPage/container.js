import { connect } from 'react-redux';
import TaskListPage from './TaskListPage';
import { taskGetter, userTaskFilter } from '../Profile/utils';

const _getEnrolledTaskIds = state => {
  const res = [];
  const tasks = taskGetter(
    state.user_task.filter(userTaskFilter(state.auth.id)),
    state.tasks
  );
  for (const task of tasks) {
    res.push(task.id);
  }
  return res;
};

const mapStateToProps = (state, ownProps) => ({
  user_id: state.auth.id,
  user_task_ids: _getEnrolledTaskIds(state),
  tasks: Object.keys(state.tasks)
    .map(t => ({
      task_id: state.tasks[t].id,
      channel_id: state.tasks[t].channel_id,
      title: state.tasks[t].title,
      point: state.tasks[t].point,
      period: state.tasks[t].period,
      pattern: state.tasks[t].pattern
    }))
    .filter(
      task => task.channel_id === ownProps.navigation.state.params.channel_id
    )
});

export default connect(mapStateToProps)(TaskListPage);
