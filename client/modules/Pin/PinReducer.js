import { SET_PINS, ADD_PIN, UPDATE_PIN } from './PinActions'

// Initial State
const initialState = []

const PinReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PINS:
      return [...action.pins]
    case ADD_PIN:
      return [action.pin, ...state]
    case UPDATE_PIN:
      return state.map(pin => (pin.pinDBObject._id === action.pin.pinDBObject._id ? action.pin : pin))
    default:
      return state
  }
}

export function getPins(state) {
  return state.pin
}

export default PinReducer
