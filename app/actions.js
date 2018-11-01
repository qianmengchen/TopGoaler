/*
 * action types
 */

export const ADD_TASK = 'ADD_TASK'

/* 
 * action creators
 */

export function addTask(content) {
    return { type: ADD_TASK, content }
}