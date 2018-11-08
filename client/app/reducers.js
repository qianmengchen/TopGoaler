import { ADD_TASK, REQUEST_TASKS, RECEIVE_TASKS } from './actions';

const initialState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false
};

function doTasks(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            content: action.content
          }
        ]
      };
    case REQUEST_TASKS:
      return { ...state, isFetching: true };
    case RECEIVE_TASKS:
      return {
        ...state,
        isFetching: false,
        tasks: action.tasks || state.tasks
      };
    default:
      return state;
  }
}

export default doTasks;
