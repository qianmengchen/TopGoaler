import { connect } from 'react-redux';
import MemberList from './MemberList';
import { navigateTo } from '../../actions';

const mapDispatchToProps = dispatch => ({
  reportNav: () => dispatch(navigateTo('TaskList'))
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(MemberList);
