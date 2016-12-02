import callApi from '../../util/apiCaller'

export const SET_PINS = 'SET_PINS'
export const ADD_PIN = 'ADD_PIN'

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