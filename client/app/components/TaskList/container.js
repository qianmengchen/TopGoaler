import { connect } from 'react-redux';
import TaskList from './TaskList';
import { fetchTasks, navigateTo } from '../../actions';

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  refreshTasks: () => dispatch(fetchTasks()),
  reportNav: () => dispatch(navigateTo('TaskDetail'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
