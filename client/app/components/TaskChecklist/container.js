import { connect } from 'react-redux';
import TaskChecklist from './TaskChecklist';

const mapStateToProps = state => ({
  state: state
});

export default connect(mapStateToProps)(TaskChecklist);
