import { SET_USER } from './AppActions'

const initialState = {
  user: null
}

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.user
      }
    default:
      return state
  }
}

export function getUser(state) {
  return state.app.user
}


export function getShowAddPost() {
  return false
}

export default AppReducer
