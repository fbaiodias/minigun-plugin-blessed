import {
  RESIZE
} from '../actions/screen'

const defaultState = {}

export default function screen (state = defaultState, action) {
  switch (action.type) {
    case RESIZE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
