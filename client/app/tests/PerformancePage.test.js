// import React from 'react';
// import { shallow } from 'enzyme';
// import configureStore from 'redux-mock-store';
// import thunkMiddleware from 'redux-thunk';
// import sinon from 'sinon';
// require('isomorphic-fetch');

// import PerformancePage from '../components/PerformancePage/PerformancePage';

// const middlewares = [thunkMiddleware]; // you can mock any middlewares here if necessary
// const mockStore = configureStore(middlewares);

// const initialTaskState = {
//   tasks: ['do frontend', 'do backend', 'do MVP ftw'],
//   isFetching: false,
//   currentTaskPage: 'ChannelListPage'
// };

// const userActivities = [
//   { create_time: '2018-12-02T03:20:45.000Z', task_id: 1, user_id: 1, event: 0 },
//   { create_time: '2018-12-02T03:20:46.000Z', task_id: 1, user_id: 2, event: 0 },
//   { create_time: '2018-12-02T03:20:46.000Z', task_id: 1, user_id: 3, event: 0 },
//   { create_time: '2018-12-02T03:20:46.000Z', task_id: 1, user_id: 4, event: 0 }
// ];

// const subscribed_channels = [
//   {
//     id: 1,
//     title: 'CS130',
//     creator: 1,
//     subtitle: 'admin title',
//     image_url: 'http://shortlink.in/themes/v3/styles/img/url-link.png'
//   },
//   {
//     id: 2,
//     title: 'Leetcode Leetcode',
//     creator: 2,
//     subtitle: 'admin title',
//     image_url: 'http://shortlink.in/themes/v3/styles/img/url-link.png'
//   }
// ];

// const channels = [
//   {
//     id: 1,
//     title: 'CS130',
//     creator: 1,
//     subtitle: 'admin title',
//     image_url: 'http://shortlink.in/themes/v3/styles/img/url-link.png'
//   },
//   {
//     id: 2,
//     title: 'Leetcode Leetcode',
//     creator: 2,
//     subtitle: 'admin title',
//     image_url: 'http://shortlink.in/themes/v3/styles/img/url-link.png'
//   }
// ];

it('needs testing', () => {});

// describe('Testing Performance Page', () => {
//   const wrapper = shallow(
//     <PerformancePage
//       userActivities={userActivities}
//       subscribed_channels={subscribed_channels}
//       channels={channels}
//       channel_id={2}
//     />,
//     {
//       context: { store: mockStore(initialTaskState) }
//     }
//   );
//   const render = wrapper.dive();

//   it('renders as expected', () => {
//     expect(render).toMatchSnapshot();
//   });
// });
