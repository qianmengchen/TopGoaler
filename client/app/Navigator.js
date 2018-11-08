import React, { Component } from 'react';
import { TaskList } from '../TaskList';
import { StackNavigator } from 'react-navigation';

export const Navigator = new StackNavigator({
    TaskList: { screen: TaskList }
}, {
    initialRouteName: 'TaskList'
});

class Nav extends Component {
    render() {
        return (
            <Navigator />
        )
    }
}

export default Nav