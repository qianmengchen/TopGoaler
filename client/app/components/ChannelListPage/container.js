import { connect } from 'react-redux';
import ChannelListPage from './ChannelListPage';
import {
  fetchTasks,
  navigateTo,
  addChannel,
  addChannelLocal
} from '../../actions';

const mapStateToProps = state => ({
  channels: state.channels
});

const mapDispatchToProps = dispatch => ({
  refreshTasks: () => dispatch(fetchTasks()),
  reportNav: () => dispatch(navigateTo('TaskDetail')),
  addChannel: (channel, user) => dispatch(addChannel(channel, user)),
  addChannelLocal: (channel, user) => dispatch(addChannelLocal(channel, user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelListPage);
