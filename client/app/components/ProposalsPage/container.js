import { connect } from 'react-redux';
import ProposalsPage from './ProposalsPage';
import { handleVote } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  let channel_id = ownProps.navigation.state.params.channel_id;
  let user_id = state.auth.id;
  let voted_id = state.votes.filter(x => user_id == x.user_id);
  let voted_map = new Map(voted_id.map(x => [x.proposal_id, x.score]));
  return {
    channel_id,
    user_id: state.auth.id,
    proposals: state.proposals
      .filter(x => channel_id == +x.channel_id)
      .map(x => ({
        ...x,
        voted: voted_map.has(x.id),
        points: voted_map.get(x.id) || 0
      }))
  };
};

const mapDispatchToProps = dispatch => ({
  handleVote: (user_id, proposal_id, score) =>
    dispatch(handleVote(user_id, proposal_id, score))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProposalsPage);
