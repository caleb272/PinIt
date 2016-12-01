import callApi from '../../util/apiCaller'

export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST'
export const SET_USER = 'SET_USER'

export function requestGetUser() {
  return function dispatchedRequest(dispatch) {
    callApi('user')
      .then(response => dispatch(setUser(response.data)))
  }
}


export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  }
}


export function setUser(user) {
  return {
    type: SET_USER,
    user
  }
}
