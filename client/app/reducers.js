import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SERVER_ERR,
  LOAD_DATA,
  ADD_CHANNEL
} from './actions';
//import { constructChannel } from './constructors';
import { combineReducers } from 'redux';
import { Alert } from 'react-native';

const initAuthState = {
  isLoggedIn: false,
  username: ''
};

function _alertLogin(method) {
  Alert.alert(
    method + ' Failure',
    'Invalid username or password',
    [{ text: 'OK' }],
    { cancelable: false }
  );
}

function _alertServer() {
  Alert.alert('Please turn on dev server at localhost:8001', '', [
    { text: 'OK' }
  ]);
}

function auth(state = initAuthState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, username: action.username };
    case LOGIN_FAILURE:
      _alertLogin('Login');
      return { ...state, ...initAuthState };
    case LOGOUT:
      return { ...state, ...initAuthState };
    case SIGNUP_SUCCESS:
      return { ...state, isLoggedIn: true, username: action.username };
    case SIGNUP_FAILURE:
      _alertLogin('Signup');
      return { ...state, ...initAuthState };
    case SERVER_ERR:
      _alertServer();
      return state;
    default:
      return state;
  }
}

const _channelReducer = (res, obj) => {
  res[obj.id] = obj;
  return res;
};

function channels(state = {}, action) {
  switch (action.type) {
    case LOAD_DATA:
      return action.data.channel.reduce(_channelReducer, {});
    case ADD_CHANNEL:
      return { [action.newchannel.id]: action.newchannel, ...state };
    default:
      return state;
  }
}

function user_channel(state = [], action) {
  switch (action.type) {
    case LOAD_DATA:
      return [...action.data.user_channel];
    default:
      return state;
  }
}

export default combineReducers({ auth, channels, user_channel });
