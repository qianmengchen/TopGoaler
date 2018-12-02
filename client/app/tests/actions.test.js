import {
  LOGOUT,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SERVER_ERR,
  LOAD_DATA,
  LOGIN_SUCCESS,
  ADD_CHANNEL,
  CREATE_CHANNEL_FAILURE,
  SUBSCRIBE_CHANNEL,
  ADD_ACTIVITY,
  ADD_FAILURE,
  SUBSCRIBE_FAILURE
} from '../actions';
import {
  _post,
  _get,
  _createChannelLocal,
  _createFailure,
  activityUploaded,
  _subscribeChannelLocal,
  _subscribeFailure,
  login,
  loginSuccess,
  logout,
  // signUp,
  signUpSuccess,
  signUpFailure,
  serverError,
  receiveData,
  activityUploadFailure
} from '../actions';
import { serverAddr } from '../../config';

const mockDispatch = jest.fn();
const mockJson = () => ({ id: 1 });

/*eslint-disable no-undef*/

global.fetch = jest.fn().mockImplementation((url, params) => {
  const response = {
    url,
    params,
    ok: true,
    json: mockJson
  };
  if (params && params.method === 'POST') {
    console.log(params.body.password);
    if (params.body && params.body.password === 'pass') {
      return Promise.resolve({ type: 'POST', ...response, ok: true });
    } else {
      return Promise.resolve({ type: 'POST', ...response, ok: false });
    }
  } else {
    return Promise.resolve({ type: 'GET', ...response });
  }
});

/*eslint-enable no-undef*/

it('_post execution', async function() {
  const response = await _post('/post', {});
  expect(response.type).toBe('POST');
  expect(response.url).toBe(serverAddr + '/post');
});

it('_get execution', async function() {
  const response = await _get('/get');
  expect(response.type).toBe('GET');
  expect(response.url).toBe(serverAddr + '/get');
});

describe('login action', () => {
  // it('login successful', async function() {
  //   await login('user', 'pass')(mockDispatch);
  //   expect(mockDispatch).toHaveBeenLastCalledWith({
  //     id: 1,
  //     type: 'LOGIN_SUCCESS',
  //     username: 'user'
  //   });
  // });

  it('login failed', async function() {
    await login('user', 'fail')(mockDispatch);
    expect(mockDispatch).toHaveBeenLastCalledWith({
      type: 'LOGIN_FAILURE',
      username: 'user'
    });
  });

  it('login successful', () => {
    const response = loginSuccess('username', 1);
    expect(response.type).toBe(LOGIN_SUCCESS);
    expect(response.username).toBe('username');
    expect(response.id).toBe(1);
  });
});

describe('logout action', () => {
  it('returned correct type', () => {
    const response = logout();
    expect(response.type).toBe(LOGOUT);
  });
});

describe('signup action', () => {
  it('signup successful', () => {
    const response = signUpSuccess('userTest');
    expect(response.type).toBe(SIGNUP_SUCCESS);
    expect(response.username).toBe('userTest');
  });

  it('signup failed', () => {
    const response = signUpFailure();
    expect(response.type).toBe(SIGNUP_FAILURE);
  });

  // it('signup failed', async function() {
  //   await signUp('user', 'fail')(mockDispatch);
  //   expect(mockDispatch).toHaveBeenLastCalledWith({
  //     type: SIGNUP_FAILURE,
  //   });
  // });
});

it('server error', () => {
  const response = serverError('error');
  expect(response.type).toBe(SERVER_ERR);
  expect(response.detail).toBe('error');
});

describe('data actions', () => {
  it('receiveData', () => {
    const response = receiveData('data');
    expect(response.type).toBe(LOAD_DATA);
    expect(response.data).toBe('data');
  });

  it('creates local channel', () => {
    const response = _createChannelLocal('channel', 1, 1);
    expect(response.type).toBe(ADD_CHANNEL);
    expect(response.channel).toBe('channel');
    expect(response.channel_id).toBe(1);
    expect(response.user_id).toBe(1);
  });

  it('creates local channel - failure', () => {
    const response = _createFailure();
    expect(response.type).toBe(CREATE_CHANNEL_FAILURE);
  });
});

describe('subscribe actions', () => {
  it('subscribes channel', () => {
    const response = _subscribeChannelLocal('channel');
    expect(response.type).toBe(SUBSCRIBE_CHANNEL);
  });

  it('subscribes channel failure', () => {
    const response = _subscribeFailure();
    expect(response.type).toBe(SUBSCRIBE_FAILURE);
  });
});

describe('task check-in actions', () => {
  it('activity uploads', () => {
    const response = activityUploaded(1, 1, 'event');
    expect(response.type).toBe(ADD_ACTIVITY);
    expect(response.task_id).toBe(1);
    expect(response.user_id).toBe(1);
    expect(response.event).toBe('event');
  });

  it('activity uploads failure', () => {
    const response = activityUploadFailure();
    expect(response.type).toBe(ADD_FAILURE);
  });
});
