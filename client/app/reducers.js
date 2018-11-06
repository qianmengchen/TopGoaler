import {
    ADD_TASK,
    REQUEST_TASKS,
    RECEIVE_TASKS
} from './actions'

const initialState = {
    tasks: ["do frontend", "do backend", "do MVP ftw"],
    isFetching: false
}

function doTasks(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, 
                tasks: [
                    ...state.tasks, 
                    {
                        content: action.content
                    }
                ]
            }
        case REQUEST_TASKS:
            return { ...state, isFetching: true }
        case RECEIVE_TASKS:
            const newTasks = action.tasks || state.tasks
            return { ...state, isFetching: false, 
                tasks: newTasks}
        default:
            return state
    }
}


export default doTasks