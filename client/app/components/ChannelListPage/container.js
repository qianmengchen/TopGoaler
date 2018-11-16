import { connect } from 'react-redux';
import ChannelListPage from './ChannelListPage';
import {
  fetchTasks,
  navigateTo,
  addChannel,
  addChannelLocal,
  subscribeChannel
} from '../../actions';

const mapStateToProps = state => ({
  channels: state.channels
});

const mapDispatchToProps = dispatch => ({
  refreshTasks: () => dispatch(fetchTasks()),
  reportNav: () => dispatch(navigateTo('TaskDetail')),
  addChannel: (channel, user) => dispatch(addChannel(channel, user)),
  addChannelLocal: (channel, user) => dispatch(addChannelLocal(channel, user)),
  subscribe: channel => dispatch(subscribeChannel(channel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelListPage);
