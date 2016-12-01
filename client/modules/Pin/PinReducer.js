import { SET_PINS, ADD_PIN } from './PinActions'

// Initial State
const initialState = []

const PinReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PINS:
      return [...action.pins]
    case ADD_PIN:
      return [action.pin, ...state]
    default:
      return state
  }
}

export function getPins(state) {
  return state.pin
}

export default PinReducer
