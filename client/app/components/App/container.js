import { connect } from 'react-redux';
import App from './App';
import { loadData } from '../../actions';

const mapStateToProps = state => ({
  data: state.database
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(loadData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
