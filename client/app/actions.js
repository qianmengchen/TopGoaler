/*
 * action types
 */

export const ADD_TASK = 'ADD_TASK';

export const REQUEST_TASKS = 'REQUEST_TASKS';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const NAVIGATE_TO = 'NAVIGATE_TO';
/*
 * action creators
 */

export function addTask(content) {
  return { type: ADD_TASK, content };
}

export function requestTasks() {
  return { type: REQUEST_TASKS };
}

export function receiveTasks(content) {
  return { type: RECEIVE_TASKS, tasks: content };
}

export function navigateTo(dest) {
  return { type: NAVIGATE_TO, dest: dest };
}

export function fetchTasks() {
  return dispatch => {
    dispatch(requestTasks());
    return fetch(`http://localhost:8001/tasks`)
      .then(res => res.json(), err => console.log('An error occurred', err))
      .then(json => {
        console.log('get ' + json);
        return dispatch(receiveTasks(json));
      });
  };
}
