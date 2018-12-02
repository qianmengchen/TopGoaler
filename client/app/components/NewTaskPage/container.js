import { connect } from 'react-redux';
import NewTaskPage from './NewTaskPage';
import { createProposal } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  user_id: state.auth.id,
  channel_id: ownProps.navigation.state.params.channel_id
});

const mapDispatchToProps = dispatch => ({
  addProposal: task => dispatch(createProposal(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTaskPage);
