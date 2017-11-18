import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import questions from './questions'
import titles from './titles'

const reducers = combineReducers({
  questions,
  titles
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

// store.subscribe(() => console.log(store.getState()))

export default store
