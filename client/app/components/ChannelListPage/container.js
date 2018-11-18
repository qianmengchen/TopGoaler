import { connect } from 'react-redux';
import ChannelListPage from './ChannelListPage';
import {
  fetchTasks,
  navigateTo,
  createChannelAsUser,
  subscribeChannel
} from '../../actions';

const mapStateToProps = state => ({
  channels: state.database.channel_creator
});

const mapDispatchToProps = dispatch => ({
  refreshTasks: () => dispatch(fetchTasks()),
  reportNav: () => dispatch(navigateTo('TaskDetail')),
  addChannel: (channel, user) => dispatch(createChannelAsUser(channel, user)),
  subscribe: channel => dispatch(subscribeChannel(channel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelListPage);
