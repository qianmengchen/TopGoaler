import { connect } from 'react-redux'
import TaskList from '../components/TaskList'
import { fetchTasks } from '../actions';

const mapStateToProps = state => ({
    tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => ({
    refreshTasks: () => dispatch(fetchTasks())
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(TaskList)