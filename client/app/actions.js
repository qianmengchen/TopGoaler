import { serverAddr } from '../config';
import { Event } from './constants';

/*
 * Auth actions
 */

/** @constant
    @type {string}
    @default
*/
export const LOGIN_BEGIN = 'LOGIN_BEGIN';

/** @constant
    @type {string}
    @default
*/
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

/** @constant
    @type {string}
    @default
*/
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

/** @constant
    @type {string}
    @default
*/
export const LOGOUT = 'LOGOUT';

/** @constant
    @type {string}
    @default
*/
export const SIGNUP_BEGIN = 'SIGNIN_BEGIN';

/** @constant
    @type {string}
    @default
*/
export const SIGNUP_SUCCESS = 'SIGNIN_SUCC';

/** @constant
    @type {string}
    @default
*/
export const SIGNUP_FAILURE = 'SIGNIN_FAIL';

/** @constant
    @type {string}
    @default
*/
export const SERVER_ERR = 'SERVER_ERR';

/**
 * Returns the action object for login success.
 *
 * @function loginSuccess
 * @param {string} username - The username of current user.
 * @param {number} id - The id of current user.
 * @returns {Object} - The action object for login success.
 */
export function loginSuccess(username, id) {
  return { type: LOGIN_SUCCESS, username, id };
}

/**
 * Returns the action object for login failure.
 *
 * @function loginFailure
 * @param {string} username - The username of current user.
 * @param {number} id - The id of current user.
 * @returns {Object} - The action object for login failure.
 */
export function loginFailure(username) {
  return { type: LOGIN_FAILURE, username };
}

/**
 * Initiate a POST request to server with body.
 *
 * @async
 * @function _post
 * @param {string} url - The server API address.
 * @param {Object} body - The request body.
 * @return {Promise<JSON>} - The response from the POST request.
 */
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

/**
 * Initiate a DELETE request to server.
 *
 * @async
 * @function _delete
 * @param {string} url - The server API address.
 * @param {Object} body - The request body.
 * @return {Promise<JSON>} - The response from the DELETE request.
 */
export const _delete = url =>
  fetch(serverAddr + url, {
    method: 'DELETE'
  });

/**
 * Initiate a GET request to server.
 *
 * @async
 * @function _get
 * @param {string} url - The server API address.
 * @return {Promise<JSON>} - The response from the GET request.
 */
export const _get = url => fetch(serverAddr + url);

/**
 * Returns the action object for login.
 *
 * @function login
 * @param {string} username - The username of current user.
 * @param {string} password - The password of current user.
 * @returns {Object} - The action generator for login.
 */
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

/**
 * Returns the action object for logout.
 *
 * @function logout
 * @returns {Object} - The action object for logout.
 */
export function logout() {
  return { type: LOGOUT };
}

/**
 * Returns the action object for signup success.
 *
 * @function signUpSuccess
 * @param {string} username - The username of current user.
 * @returns {Object} - The action object for signup success.
 */
export function signUpSuccess(username) {
  return { type: SIGNUP_SUCCESS, username };
}

/**
 * Returns the action object for signup failure.
 *
 * @function signUpSuccess
 * @returns {Object} - The action object for signup failure.
 */
export function signUpFailure() {
  return { type: SIGNUP_FAILURE };
}

/**
 * Returns the action object for server error.
 *
 * @function serverError
 * @param {Object} detail - The detail of this error.
 */
export function serverError(detail) {
  return { type: SERVER_ERR, detail };
}

/**
 * Returns the action object for signup.
 *
 * @function login
 * @param {string} username - The username of current user.
 * @param {string} password - The password of current user.
 * @returns {Object} - The action generator for signup.
 */
export function signUp(username, password) {
  return async dispatch => {
    const body = { username, password };
    try {
      const res = await _post('/signUp', body);
      if (!res.ok) return dispatch(loginFailure(username));
      dispatch(loadData());
    } catch (e) {
      dispatch(serverError(e));
    }
  };
}

/*
 * Vote action
 */

/**
 * Returns the action object for handling vote.
 *
 * @function handleVote
 * @param {number} user_id - The id of current user.
 * @param {number} proposal_id - The id of the proposal being voted.
 * @param {number} score - The score of the proposal being voted.
 * @param {number} channel_id - The id of the channel.
 * @returns {Object} - The action generator for handling vote.
 */
export function handleVote(user_id, proposal_id, score, channel_id) {
  return async dispatch => {
    const body = { user_id, proposal_id, score };
    try {
      const res = await _post('/vote', body);
      if (!res.ok) return;
      dispatch(loadData());
      console.log('currentChannel', 'by /vote');
      dispatch(loadCurrentChannel(user_id, channel_id));
    } catch (e) {
      dispatch(serverError(e));
    }
  };
}

/*
 * Data actions
 */

/** @constant
    @type {string}
    @default
*/
export const LOAD_DATA = 'LOAD_DATA';

/**
 * Returns the action object for receive data.
 *
 * @function receiveData
 * @param {Object} data - The received data.
 * @returns {Object} - The action object for receive data.
 */
export function receiveData(data) {
  return { type: LOAD_DATA, data };
}

/**
 * Returns the action object for loading data.
 *
 * @function loadData
 * @returns {Object} - The JSON object of loaded data.
 */
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

/** @constant
    @type {string}
    @default
*/
export const ADD_CHANNEL = 'ADD_CHANNEL';

/** @constant
    @type {string}
    @default
*/
export const CREATE_CHANNEL_FAILURE = 'CREATE_CHANNEL_FAILURE';

/**
 * Returns the action object for creating channel locally.
 *
 * @function _createChannelLocal
 * @param {string} channel - The username of newly created channel.
 * @param {number} channel_id - The id of the channel.
 * @param {number} user_id - The id of the user.
 * @returns {Object} - The action object for creating channel locally.
 */
export const _createChannelLocal = (channel, channel_id, user_id) => {
  return { type: ADD_CHANNEL, channel, channel_id, user_id };
};

/**
 * Returns the action object for failing to creating channel.
 *
 * @function _createChannelLocal
 * @returns {Object} - The action object for failing to creating channel.
 */
export const _createFailure = () => {
  return { type: CREATE_CHANNEL_FAILURE };
};

/**
 * Returns the action object for creating channel.
 *
 * @function createChannelAsUser
 * @param {string} channel - The username of newly created channel.
 * @param {number} user_id - The id of the user.
 * @returns {Object} - The action generator for creating channel.
 */
export function createChannelAsUser(channel, user_id) {
  return async dispatch => {
    var res = await _post('/channel', { ...channel });
    if (!res.ok) return dispatch(_createFailure());
    const { id } = await res.json();
    res = await _post('/user_channel', { channel_id: id, user_id });
    if (!res.ok) return dispatch(_createFailure());
    //dispatch(_createChannelLocal(channel, id, user_id));
    dispatch(loadData());
  };
}

export function createProposal(proposal) {
  return async dispatch => {
    var res = await _post('/proposal', { ...proposal });
    if (!res.ok) return dispatch(_createFailure());
    //const { id } = await res.json();
    dispatch(loadData());
  };
}
/*
 * subscription
 */

/** @constant
    @type {string}
    @default
*/
export const SUBSCRIBE_CHANNEL = 'SUBSCRIBE_CHANNEL';

/** @constant
    @type {string}
    @default
*/
export const SUBSCRIBE_FAILURE = 'SUBSCRIBE_FAILURE';

/**
 * Returns the action object for subscribing to channel locally.
 *
 * @function _subscribeChannelLocal
 * @param {number} user_id - The id of the user.
 * @param {number} channel_id - The id of the channel.
 * @returns {Object} - The action object for subscribing to channel locally.
 */
export function _subscribeChannelLocal(user_id, channel_id) {
  return { type: SUBSCRIBE_CHANNEL, user_id, channel_id };
}

/**
 * Returns the action object for failure to subscribe to channel.
 *
 * @function _subscribeFailure
 * @returns {Object} - The action object for failure to subscribe to channel.
 */
export const _subscribeFailure = () => {
  return { type: SUBSCRIBE_FAILURE };
};

/**
 * Returns the action object for subscribing to a channel.
 *
 * @function subscribeChannelAsUser
 * @param {number} user_id - The id of the user.
 * @param {number} channel_id - The id of the channel being subscribed to.
 * @returns {Object} - The action generator for subscribing to a channel.
 */
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

/** @constant
    @type {string}
    @default
*/
export const ADD_ACTIVITY = 'ADD_ACTIVITY';

/** @constant
    @type {string}
    @default
*/
export const ADD_FAILURE = 'ADD_FAILURE';

/**
 * Returns the action object for activity uploading failure.
 *
 * @function activityUploadFailure
 * @returns {Object} - The action object for activity uploading failure.
 */
export function activityUploadFailure() {
  return { type: ADD_FAILURE };
}

/**
 * Returns the action object for activity uploading success.
 *
 * @function activityUploaded
 * @param {number} task_id - The id of the task in the activity.
 * @param {number} user_id - The id of current user.
 * @param {event} event - The event status of this activity.
 * @returns {Object} - The action object for activity uploading success.
 */
export function activityUploaded(task_id, user_id, event) {
  return { type: ADD_ACTIVITY, task_id, user_id, event };
}

/**
 * Returns the action object for new activity log.
 *
 * @function newActivityLog
 * @param {number} task_id - The id of the task in the activity.
 * @param {number} user_id - The id of current user.
 * @param {event} event - The event status of this activity.
 * @param {number} channel_id - The id of current channel.
 * @returns {Object} - The action generator for for new activity log.
 */
export function newActivityLog(task_id, user_id, event, channel_id = null) {
  return async dispatch => {
    const body = { task_id, user_id, event };
    try {
      const res = await _post('/activity_log', body);
      if (!res.ok) return dispatch(activityUploadFailure());
      dispatch(activityUploaded(task_id, user_id, event));
      // If we have done a task, refresh
      if (event == Event.FINISH && channel_id != null) {
        console.log('currentChannel', 'by /activity_log FINISH');
        dispatch(loadCurrentChannel(user_id, channel_id));
      }
    } catch (e) {
      dispatch(serverError(e));
    }
  };
}

/** @constant
    @type {string}
    @default
*/
export const ENROLL_TASK = 'ENROLL_TASK';

/** @constant
    @type {string}
    @default
*/
export const DROP_TASK = 'DROP_TASK';

/** @constant
    @type {string}
    @default
*/
export const USER_TASK_FAILURE = 'USER_TASK_FAILURE';

/**
 * Returns the action object for user enrolling a task.
 *
 * @function userTaskEnroll
 * @param {number} task_id - The id of the task to be enrolled.
 * @param {number} user_id - The id of current user.
 * @returns {Object} - The action object for user enrolling a task.
 */
export function userTaskEnroll(task_id, user_id) {
  return { type: ENROLL_TASK, task_id, user_id };
}

/**
 * Returns the action object for user dropping a task.
 *
 * @function userTaskDrop
 * @param {number} task_id - The id of the task to be dropped from.
 * @param {number} user_id - The id of current user.
 * @returns {Object} - The action object for user dropping a task.
 */
export function userTaskDrop(task_id, user_id) {
  return { type: DROP_TASK, task_id, user_id };
}

/**
 * Returns the action object for failure of user operation on the task.
 *
 * @function userTaskOperationFailure
 * @returns {Object} - The action object for failure of user operation on the task.
 */
export function userTaskOperationFailure() {
  return { type: USER_TASK_FAILURE };
}

/**
 * Returns the action object for a user enrolling a task.
 *
 * @function enrollTaskAsUser
 * @param {number} task_id - The id of the task to be enrolled.
 * @param {number} user_id - The id of the user.
 * @returns {Object} - The action generator for a user enrolling a task.
 */
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

/**
 * Returns the action object for a user dropping a task.
 *
 * @function dropTaskAsUser
 * @param {number} task_id - The id of the task to be dropped.
 * @param {number} user_id - The id of the user.
 * @returns {Object} - The action generator for a user dropping a task.
 */
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

/** @constant
    @type {string}
    @default
*/
export const LOAD_CURRENT_CHANNEL_DONE = 'LOAD_CURRENT_CHANNEL_DONE';
export const CLEAR_CURRENT_CHANNEL = 'CLEAR_CURRENT_CHANNEL';

export function loadCurrentChannelDone(data) {
  return {
    type: LOAD_CURRENT_CHANNEL_DONE,
    tasks: data.tasks,
    score: data.score.score || 0,
    ranking: data.ranking.rank || NaN,
    channelId: data.channelId
  };
}

export function clearCurrentChannel() {
  return { type: CLEAR_CURRENT_CHANNEL };
}

export function loadCurrentChannel(userId, channelId) {
  return async dispatch => {
    try {
      const score = await (await _get(`/score/${userId}&${channelId}`)).json();
      const ranking = await (await _get(
        `/ranking/${userId}&${channelId}`
      )).json();
      const tasks = await (await _get(`/task/channel_id/${channelId}`)).json();
      dispatch(loadCurrentChannelDone({ score, ranking, tasks, channelId }));
    } catch (e) {
      //dispatch(loadCurrentChannelDone({ score: 0, ranking: NaN, tasks: [] }))
      dispatch(serverError(e));
    }
  };
}
