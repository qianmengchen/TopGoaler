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

/*
 * Auth functions
 */
export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const SIGNUP_BEGIN = 'SIGNIN_BEGIN';
export const SIGNUP_SUCCESS = 'SIGNIN_SUCC';
export const SIGNUP_FAILURE = 'SIGNIN_FAIL';

export const SERVER_ERR = 'SERVER_ERR';

export function loginSuccess(username) {
  return { type: LOGIN_SUCCESS, username: username };
}

export function loginFailure(username) {
  return { type: LOGIN_FAILURE, username: username };
}

const _post = (url, body) =>
  fetch('http://localhost:8001' + url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body
  }).then(res => res.json());

export function login(username, password) {
  return dispatch => {
    const body = JSON.stringify({ username, password });
    return _post('/login', body).then(
      json => {
        dispatch(
          (json.status == 'success' ? loginSuccess : loginFailure)(username)
        );
      },
      e => dispatch(serverError(e))
    );
  };
}

export function logout() {
  return { type: LOGOUT };
}

export function signUpSuccess(username) {
  return { type: SIGNUP_SUCCESS, username };
}

export function signUpFailure() {
  return { type: SIGNUP_FAILURE };
}

export function serverError(detail) {
  return { type: SERVER_ERR, detail };
}

export function signUp(username, password) {
  return dispatch => {
    const body = JSON.stringify({ username, password });
    return _post('/signup', body).then(
      json => {
        dispatch(
          (json.status == 'success' ? signUpSuccess : signUpFailure)(username)
        );
      },
      e => dispatch(serverError(e))
    );
  };
}
