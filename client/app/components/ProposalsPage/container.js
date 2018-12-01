import { connect } from 'react-redux';
import ProposalsPage from './ProposalsPage';
import { handleVote } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  let channel_id =ownProps.navigation.state.params.channel_id
  return {
    channel_id,
    user_id: state.auth.id,
    proposals: state.proposals.filter(x => channel_id == +x.channel_id )
  }
};

const mapDispatchToProps = dispatch => ({
  handleVote: (user_id, proposal_id, score) => dispatch(handleVote(user_id, proposal_id, score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProposalsPage);
