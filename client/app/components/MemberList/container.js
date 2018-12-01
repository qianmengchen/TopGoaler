import { connect } from 'react-redux';
import MemberList from './MemberList';

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(MemberList);
