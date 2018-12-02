import {
  auth,
  channels,
  user_channel,
  user_task,
  proposals,
  activity_log
} from '../reducers';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SERVER_ERR,
  LOAD_DATA,
  ADD_CHANNEL,
  CREATE_CHANNEL_FAILURE,
  // ADD_ACTIVITY,
  ADD_FAILURE
} from '../actions';
import { constructChannel } from '../constructors';

it('returns correct auth state', () => {
  expect(auth({}, { type: LOGIN_FAILURE })).toEqual({
    id: null,
    isLoggedIn: false,
    username: ''
  });
  expect(auth({}, { type: LOGIN_SUCCESS, username: 'user', id: 1 })).toEqual({
    id: 1,
    isLoggedIn: true,
    username: 'user'
  });
  expect(auth({}, { type: LOGOUT })).toEqual({
    id: null,
    isLoggedIn: false,
    username: ''
  });
  expect(auth({}, { type: SIGNUP_SUCCESS, username: 'user' })).toEqual({
    isLoggedIn: true,
    username: 'user'
  });
  expect(auth({}, { type: SIGNUP_FAILURE })).toEqual({
    id: null,
    isLoggedIn: false,
    username: ''
  });
  expect(auth({}, { type: SERVER_ERR })).toEqual({});
});

it('returns correct channel state', () => {
  // expect(channels({}, { type: LOAD_DATA, data: {channel: {"id":1,"title":"CS130","creator":1,"subtitle":"admin title","image_url":"http://shortlink.in/themes/v3/styles/img/url-link.png"}} })).toEqual({"id": null, "isLoggedIn": false, "username": ""});
  expect(channels({}, { type: ADD_CHANNEL })).toEqual({});
  expect(channels({}, { type: CREATE_CHANNEL_FAILURE })).toEqual({});
});

it('returns correct user_channel state', () => {
  expect(
    user_channel([], {
      type: LOAD_DATA,
      data: { user_channel: [{ user_id: 1, channel_id: 1 }] }
    })
  ).toEqual([{ user_id: 1, channel_id: 1 }]);
  expect(
    user_channel([], { type: ADD_CHANNEL, user_id: 1, channel_id: 1 })
  ).toEqual([{ channel_id: 1, user_id: 1 }]);
});

it('returns correct users state', () => {
  // expect(users({}, { type: LOAD_DATA })).toEqual({})
});

it('returns correct user_task state', () => {
  expect(
    user_task([], {
      type: LOAD_DATA,
      data: { user_task: [{ task_id: 1, user_id: 1 }] }
    })
  ).toEqual([{ task_id: 1, user_id: 1 }]);
});

it('returns correct proposals state', () => {
  expect(
    proposals([], {
      type: LOAD_DATA,
      data: {
        proposal: [
          {
            id: 1,
            title: 'do 10 hard problems',
            channel_id: '2',
            subtitle: 'this is a proposal',
            period: 0,
            pattern: 1
          }
        ]
      }
    })
  ).toEqual([
    {
      id: 1,
      title: 'do 10 hard problems',
      channel_id: '2',
      subtitle: 'this is a proposal',
      period: 0,
      pattern: 1
    }
  ]);
});

it('returns correct activity_log state', () => {
  expect(
    activity_log([], {
      type: LOAD_DATA,
      data: {
        activity_log: [
          {
            create_time: '2018-12-02T03:20:45.000Z',
            task_id: 1,
            user_id: 2,
            event: 0
          }
        ]
      }
    })
  ).toEqual([
    {
      create_time: '2018-12-02T03:20:45.000Z',
      task_id: 1,
      user_id: 2,
      event: 0
    }
  ]);
  // expect(activity_log([], { type: ADD_ACTIVITY, task_id: 1, user_id: 1, event: 'event' })).toEqual([{"event": "event", "task_id": 1, "timestamp": new Date().toISOString(), "user_id": 1}])
  expect(activity_log([], { type: ADD_FAILURE })).toEqual([]);
});

it('contructs channel with default img if null', () => {
  const response = constructChannel('title', 'subtitle', 'creator', null);

  expect(response).toEqual({
    title: 'title',
    subtitle: 'subtitle',
    creator: 'creator',
    image_url: 'http://shortlink.in/themes/v3/styles/img/url-link.png'
  });
});
