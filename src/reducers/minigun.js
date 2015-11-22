import {
  STATS,
  PHASE_STARTED,
  DONE
 } from '../actions/minigun'

const defaultState = {
  stats: []
}

export default function minigun (state = defaultState, action) {
  switch (action.type) {
    case STATS:
      return {
        ...state,
        stats: state.stats.concat([action.payload])
      }
    case PHASE_STARTED:
      return {
        ...state,
        currentPhase: action.payload
      }
    case DONE:
      return {
        ...state,
        done: true,
        finalStats: action.payload
      }
    default:
      return state
  }
}
