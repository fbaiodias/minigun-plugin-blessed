import { combineReducers, createStore, applyMiddleware } from 'redux'
import minigun from './minigun'
import screen from './screen'
import createLogger from '../middlewares/logger'

const reducer = combineReducers({
  minigun,
  screen
})

export default function configureStore (initialState = {}) {
  const logger = createLogger()
  const createStoreWithMiddleware = applyMiddleware(logger)(createStore)
  const store = createStoreWithMiddleware(reducer)

  return store
}
