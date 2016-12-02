import callApi from '../../util/apiCaller'

export const SET_PINS = 'SET_PINS'
export const ADD_PIN = 'ADD_PIN'
export const UPDATE_PIN = 'UPDATE_PIN'
export const DELETE_PIN = 'DELETE_PIN'

export function requestGetPins() {
  return function dispatchedRequest(dispatch) {
    return callApi('pin')
      .then(response => dispatch(setPins(response.data)))
  }
}


export function requestCreatePin(image, description) {
  return function dispatchedRequest(dispatch) {
    return callApi('pin', 'POST', { image, description })
      .then(response => (response.data
          ? dispatch(addPin(response.data))
          : response))
  }
}


export function requestUpdatePin(pin) {
  return function dispatchedRequest(dispatch) {
    dispatch(updatePin(pin))
    return callApi('pin', 'PUT', pin.pinDBObject)
  }
}


export function requestDeletePin(pin) {
  return function dispatchedRequest(dispatch) {
    dispatch(deletePin(pin))
    return callApi('pin', 'DELETE', pin.pinDBObject)
  }
}


export function setPins(pins) {
  return {
    type: SET_PINS,
    pins
  }
}


export function addPin(pin) {
  return {
    type: ADD_PIN,
    pin
  }
}


export function updatePin(pin) {
  return {
    type: UPDATE_PIN,
    pin
  }
}


export function deletePin(pin) {
  return {
    type: DELETE_PIN,
    pin
  }
}
