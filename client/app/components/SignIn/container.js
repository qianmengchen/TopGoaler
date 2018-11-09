import { connect } from 'react-redux';
import SignIn from './SignIn';
import { navigateTo } from '../../actions';

const mapStateToProps = state => ({
  //   tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  //   refreshTasks: () => dispatch(fetchTasks()),
  reportNav: () => dispatch(navigateTo('TaskList'))
});

export default connect(
  //   mapStateToProps,
  () => ({}),
  mapDispatchToProps
)(SignIn);
