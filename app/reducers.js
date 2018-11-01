import {
    ADD_TASK
} from './actions'

const initialState = {
    tasks: []
}

function app(state = initialState, action) {
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
        default:
            return state
    }
}

export default app