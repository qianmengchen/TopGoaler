import { createStore } from 'redux'
import app from './reducers'
import {
    addTask
} from './actions'

export function storeTest() {
    const store = createStore(app)
    console.log(store.getState())
    const unsub = store.subscribe(() => console.log(store.getState()))
    store.dispatch(addTask("do this and then that"))
    unsub()
}



