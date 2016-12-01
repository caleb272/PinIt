/**
 * Root Reducer
 */
import { combineReducers } from 'redux'

// Import Reducers
import app from './modules/App/AppReducer'
import posts from './modules/Post/PostReducer'
import intl from './modules/Intl/IntlReducer'
import pin from './modules/Pin/PinReducer'

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  pin
})
