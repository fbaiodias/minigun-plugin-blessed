import {
  STATS,
  PHASE_STARTED,
  DONE
} from '../actions/minigun'

const defaultState = {
  stats: [],
  latency: {},
  codes: {}
}

const chartDataFormatter = (state, data) => {
  const newState = {
    ...state
  }

  Object.keys(data).forEach((key) => {
    newState[key] = newState[key] || {
      total: 0,
      samples: []
    }

    newState[key].total += data[key]
    newState[key].samples.push(data[key])
  })

  return newState
}

export default function minigun (state = defaultState, action) {
  switch (action.type) {
    case STATS:
      return {
        ...state,
        latency: chartDataFormatter(state.latency, action.payload.latency),
        codes: chartDataFormatter(state.codes, action.payload.codes),
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
