import {
  // LOGIN_SUCCESS,
  // LOGIN_FAILURE,
  LOGOUT,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SERVER_ERR,
  LOAD_DATA
  // ADD_CHANNEL,
  // ADD_ACTIVITY,
  // ADD_FAILURE
} from '../actions';
import {
  _post,
  _get,
  login,
  logout,
  signUpSuccess,
  signUpFailure,
  serverError,
  receiveData
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
      return Promise.resolve({ type: 'POST', ...response });
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
});
