import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SERVER_ERR,
  LOAD_DATA,
  LOAD_CURRENT_CHANNEL_DONE,
  ADD_CHANNEL,
  ADD_ACTIVITY,
  ADD_FAILURE,
  CREATE_CHANNEL_FAILURE,
  ENROLL_TASK,
  DROP_TASK,
  USER_TASK_FAILURE,
  SUBSCRIBE_CHANNEL,
  SUBSCRIBE_FAILURE
} from './actions';
import { combineReducers } from 'redux';
import { Alert } from 'react-native';

function _alertOperationFailure() {
  Alert.alert('Operation failed', '', [{ text: 'OK' }]);
}

const initAuthState = {
  isLoggedIn: false,
  username: '',
  id: null
};

export function _alertLogin(method) {
  Alert.alert(
    method + ' Failure',
    'Invalid username or password',
    [{ text: 'OK' }],
    { cancelable: false }
  );
}

export function _alertServer() {
  Alert.alert('Server error', '', [{ text: 'OK' }]);
}

export function auth(state = initAuthState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        username: action.username,
        id: action.id
      };
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

export const _arrayToDictReducer = (res, obj) => {
  res[obj.id] = obj;
  return res;
};

export function channels(state = {}, action) {
  switch (action.type) {
    case LOAD_DATA:
      return action.data.channel.reduce(_arrayToDictReducer, {});
    case ADD_CHANNEL:
      return { [action.channel_id]: action.channel, ...state };
    case CREATE_CHANNEL_FAILURE:
      _alertOperationFailure();
      return state;
    default:
      return state;
  }
}

export function user_channel(state = [], action) {
  switch (action.type) {
    case LOAD_DATA:
      return [...action.data.user_channel];
    case ADD_CHANNEL:
      return [
        { user_id: action.user_id, channel_id: action.channel_id },
        ...state
      ];
    case SUBSCRIBE_CHANNEL:
      return [
        { user_id: action.user_id, channel_id: action.channel_id },
        ...state
      ];
    case SUBSCRIBE_FAILURE:
      _alertOperationFailure();
      return state;
    default:
      return state;
  }
}

export function users(state = {}, action) {
  switch (action.type) {
    case LOAD_DATA:
      return action.data.user.reduce(_arrayToDictReducer, {});
    default:
      return state;
  }
}

export function user_task(state = [], action) {
  switch (action.type) {
    case LOAD_DATA:
      return [...action.data.user_task];
    case USER_TASK_FAILURE:
      _alertOperationFailure();
      return state;
    case ENROLL_TASK:
      return [{ task_id: action.task_id, user_id: action.user_id }, ...state];
    case DROP_TASK:
      return [...state].filter(({ task_id, user_id }) => {
        return !(task_id === action.task_id && user_id === action.user_id);
      });
    default:
      return state;
  }
}

export function proposals(state = [], action) {
  switch (action.type) {
    case LOAD_DATA:
      return action.data.proposal.map(x => ({
        ...x,
        id: +x.id
      }));
    default:
      return state;
  }
}

function votes(state = [], action) {
  switch (action.type) {
    case LOAD_DATA:
      return [...action.data.vote];
    default:
      return state;
  }
}

function tasks(state = {}, action) {
  switch (action.type) {
    case LOAD_DATA:
      return action.data.task.reduce(_arrayToDictReducer, {});
    default:
      return state;
  }
}

export function activity_log(state = [], action) {
  switch (action.type) {
    case LOAD_DATA:
      return [...action.data.activity_log];
    case ADD_ACTIVITY:
      return [
        {
          task_id: action.task_id,
          user_id: action.user_id,
          create_time: new Date().toISOString(),
          event: action.event
        },
        ...state
      ];
    case ADD_FAILURE:
      _alertOperationFailure();
      return state;
    default:
      return state;
  }
}

const default_current_channel = {
  score: 0,
  ranking: NaN,
  tasks: [],
  channelId: NaN
};

function current_channel(state = default_current_channel, action) {
  switch (action.type) {
    case LOAD_CURRENT_CHANNEL_DONE: {
      console.log('current_channel DONE', action);
      const obj = { ...action };
      delete obj.type;
      return obj;
    }
    default:
      return state;
  }
}

export default combineReducers({
  auth,
  channels,
  user_channel,
  users,
  user_task,
  tasks,
  activity_log,
  proposals,
  votes,
  current_channel
});
