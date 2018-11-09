import { ADD_TASK, REQUEST_TASKS, RECEIVE_TASKS, NAVIGATE_TO } from './actions';

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'TaskList'
};

function tasks(state = initialTaskState, action) {
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

    case RECEIVE_TASKS: {
      let newTasks = action.tasks || state.tasks;
      return { ...state, isFetching: false, tasks: newTasks };
    }

    case NAVIGATE_TO:
      return { ...state, currentTaskPage: action.dest };

    default:
      return state;
  }
}

export default tasks;
