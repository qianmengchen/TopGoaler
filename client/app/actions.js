import { serverAddr } from '../config';

/*
 * Auth actions
 */

/** @constant
    @type {string}
    @default
*/
export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const SIGNUP_BEGIN = 'SIGNIN_BEGIN';
export const SIGNUP_SUCCESS = 'SIGNIN_SUCC';
export const SIGNUP_FAILURE = 'SIGNIN_FAIL';

export const SERVER_ERR = 'SERVER_ERR';

/** @function loginSuccess
 * Returns the action object for login success.
 * @param {string} username - The username of current user.
 * @param {number} id - The id of current user.
 * @returns {Object} - The action object for login success.
 */
export function loginSuccess(username, id) {
  return { type: LOGIN_SUCCESS, username, id };
}

export function loginFailure(username) {
  return { type: LOGIN_FAILURE, username };
}

export const _post = (url, body) =>
  fetch(serverAddr + url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

export const _delete = url =>
  fetch(serverAddr + url, {
    method: 'DELETE'
  });

export const _get = url => fetch(serverAddr + url);

export function login(username, password) {
  return async dispatch => {
    const body = { username, password };
    try {
      const res = await _post('/login', body);
      if (!res.ok) return dispatch(loginFailure(username));
      const { id } = await res.json();
      dispatch(loginSuccess(username, id));
    } catch (e) {
      dispatch(serverError(e));
    }
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
  return async dispatch => {
    const body = { username, password };
    try {
      const res = await _post('/login', body);
      if (!res.ok) return dispatch(loginFailure(username));
      //const json = await res.json()
      dispatch(loginSuccess(username));
    } catch (e) {
      dispatch(serverError(e));
    }
  };
}

/*
 * Vote action
 */
export function handleVote(user_id, proposal_id, score) {
  return async dispatch => {
    const body = { user_id, proposal_id, score };
    try {
      const res = await _post('/vote', body);
      if (!res.ok) return;
      dispatch(loadData());
    } catch (e) {
      dispatch(serverError(e));
    }
  };
}

/*
 * Data actions
 */
export const LOAD_DATA = 'LOAD_DATA';

export function receiveData(data) {
  return { type: LOAD_DATA, data };
}

export function loadData() {
  return dispatch => {
    return fetch(`${serverAddr}/loaddata`)
      .then(res => res.json())
      .then(json => {
        return dispatch(receiveData(json));
      });
  };
}

/*
 * Channel actions
 */
export const ADD_CHANNEL = 'ADD_CHANNEL';
export const CREATE_CHANNEL_FAILURE = 'CREATE_CHANNEL_FAILURE';

const _createChannelLocal = (channel, channel_id, user_id) => {
  return { type: ADD_CHANNEL, channel, channel_id, user_id };
};

const _createFailure = () => {
  return { type: CREATE_CHANNEL_FAILURE };
};

export function createChannelAsUser(channel, user_id) {
  return async dispatch => {
    var res = await _post('/channel', { ...channel });
    if (!res.ok) return dispatch(_createFailure());
    const { id } = await res.json();
    res = await _post('/user_channel', { channel_id: id, user_id });
    if (!res.ok) return dispatch(_createFailure());
    dispatch(_createChannelLocal(channel, id, user_id));
  };
}

/*
 * subscription
 */

export const SUBSCRIBE_CHANNEL = 'SUBSCRIBE_CHANNEL';
export const SUBSCRIBE_FAILURE = 'SUBSCRIBE_FAILURE';
function _subscribeChannelLocal(user_id, channel_id) {
  return { type: SUBSCRIBE_CHANNEL, user_id, channel_id };
}

const _subscribeFailure = () => {
  return { type: SUBSCRIBE_FAILURE };
};

export function subscribeChannelAsUser(user_id, channel_id) {
  return async dispatch => {
    const res = await _post('/user_channel', { channel_id, user_id });
    if (!res.ok) {
      return dispatch(_subscribeFailure());
    }
    dispatch(_subscribeChannelLocal(user_id, channel_id));
  };
}

/*
 * task check-in
 */

export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const ADD_FAILURE = 'ADD_FAILURE';
export function activityUploadFailure() {
  return { type: ADD_FAILURE };
}
export function activityUploaded(task_id, user_id, event) {
  return { type: ADD_ACTIVITY, task_id, user_id, event };
}
export function newActivityLog(task_id, user_id, event) {
  return async dispatch => {
    const body = { task_id, user_id, event };
    try {
      const res = await _post('/activity_log', body);
      if (!res.ok) return dispatch(activityUploadFailure());
      dispatch(activityUploaded(task_id, user_id, event));
    } catch (e) {
      dispatch(serverError(e));
    }
  };
}

export const ENROLL_TASK = 'ENROLL_TASK';
export const DROP_TASK = 'DROP_TASK';
export const USER_TASK_FAILURE = 'USER_TASK_FAILURE';

export function userTaskEnroll(task_id, user_id) {
  return { type: ENROLL_TASK, task_id, user_id };
}

export function userTaskDrop(task_id, user_id) {
  return { type: DROP_TASK, task_id, user_id };
}

export function userTaskOperationFailure() {
  return { type: USER_TASK_FAILURE };
}

export function enrollTaskAsUser(task_id, user_id) {
  return async dispatch => {
    const body = { task_id, user_id };
    try {
      const res = await _post('/user_task', body);
      if (!res.ok) return dispatch(userTaskOperationFailure());
      dispatch(userTaskEnroll(task_id, user_id));
    } catch (e) {
      dispatch(serverError(e));
    }
  };
}

export function dropTaskAsUser(task_id, user_id) {
  return async dispatch => {
    try {
      const res = await _delete(`/user_task/${user_id}&${task_id}`);
      if (!res.ok) return dispatch(userTaskOperationFailure());
      dispatch(userTaskDrop(task_id, user_id));
    } catch (e) {
      dispatch(serverError(e));
    }
  };
}
