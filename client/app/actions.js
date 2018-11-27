import { serverAddr } from '../config';

/*
 * Auth actions
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
  fetch(serverAddr + url, {
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
      () => {
        dispatch(loginSuccess(username));
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
      .then(res => res.json(), err => console.log('An error occurred', err))
      .then(json => {
        return dispatch(receiveData(json));
      });
  };
}

/*
 * Channel actions
 */
export const ADD_CHANNEL = 'ADD_CHANNEL';

const _query = params => {
  var esc = encodeURIComponent;
  var query = Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&');
  return query;
};

const _createChannelLocal = (channel, user) => {
  return { type: ADD_CHANNEL, channel, user };
};

export function createChannelAsUser(channel, user) {
  return dispatch => {
    let body = _query({ channel, user });
    let url = `${serverAddr}/channel_creator`;
    fetch(url, {
      method: 'POST',
      body,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(() => {
      dispatch(_createChannelLocal(channel, user));
    });
  };
}

/*
 * subscription
 */

export const SUBSCRIBE_CHANNEL = 'SUBSCRIBE_CHANNEL';
export function subscribeChannel(channel) {
  return { type: SUBSCRIBE_CHANNEL, channel };
}
