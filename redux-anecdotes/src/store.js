import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
import { combineReducers } from '@reduxjs/toolkit'

const reducer = combineReducers({
  anecdote: anecdoteReducer,
  filter: filterReducer,
  notification: notificationReducer
})

const store = configureStore({ reducer })

console.log("Initial store state: ", store.getState())

export default store
