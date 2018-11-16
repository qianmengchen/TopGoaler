import {
  ADD_TASK,
  REQUEST_TASKS,
  RECEIVE_TASKS,
  NAVIGATE_TO,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SERVER_ERR,
  LOAD_DATA,
  ADD_CHANNEL_LOCAL,
  SUBSCRIBE_CHANNEL
} from './actions';
import { combineReducers } from 'redux';
import { Alert } from 'react-native';

const initialTaskState = {
  tasks: ['do frontend', 'do backend', 'do MVP ftw'],
  isFetching: false,
  currentTaskPage: 'ChannelListPage'
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

function database(state = {}, action) {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, ...action.data };
    default:
      return state;
  }
}

const initialChannelState = [
  { channel: 'ChannelA', creator: 'A', subscribed: false },
  { channel: 'ChannelB', creator: 'B', subscribed: false },
  { channel: 'Channel Orange', creator: 'Frank Ocean', subscribed: false }
];

function channels(state = initialChannelState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return action.data.channel_creator
        .map(({ channel, user }) => ({
          channel,
          creator: user,
          subscribed: false
        }))
        .sort((x, y) => x.creator < y.creator);
    case ADD_CHANNEL_LOCAL: {
      const { channel, user } = action;
      if (state.find(ch => ch.channel == channel)) {
        return state;
      }
      return [{ channel, creator: user, subscribed: true }, ...state];
    }
    case SUBSCRIBE_CHANNEL:
      return state.map(ch =>
        ch.channel == action.channel ? { ...ch, subscribed: true } : ch
      );
    default:
      return state;
  }
}

export default combineReducers({ tasks, auth, database, channels });
