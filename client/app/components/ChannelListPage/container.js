import { connect } from 'react-redux';
import ChannelListPage from './ChannelListPage';
import { fetchTasks, navigateTo } from '../../actions';

const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

const mapDispatchToProps = dispatch => ({
  refreshTasks: () => dispatch(fetchTasks()),
  reportNav: () => dispatch(navigateTo('TaskDetail'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelListPage);
