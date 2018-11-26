import { connect } from 'react-redux';
import App from './App';
import { loadData } from '../../actions';

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(loadData())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
