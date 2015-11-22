// taken form https://github.com/fcomb/redux-logger/blob/master/src/index.js

import logger from '../logger'

const repeat = (str, times) => (new Array(times + 1)).join(str)
const pad = (num, maxLength) => repeat(`0`, maxLength - num.toString().length) + num

// Use the new performance api to get better precision if available
const timer = Date

/**
 * Creates logger with followed options
 *
 * @namespace
 * @property {object} options - options for logger
 * @property {string} options.level - console[level]
 * @property {boolean} options.collapsed - is group collapsed?
 * @property {boolean} options.predicate - condition which resolves logger behavior
 * @property {bool} options.duration - print duration of each action?
 * @property {bool} options.timestamp - print timestamp with each action?
 * @property {function} options.transformer - transform state before print
 * @property {function} options.actionTransformer - transform action before print
 */

function createLogger (options = {}) {
  return ({ getState }) => (next) => (action) => {
    const {
      level = 'debug',
      predicate,
      duration = false,
      timestamp = true,
      transformer = state => state,
      actionTransformer = actn => actn
    } = options

    // exit early if predicate function returns false
    if (typeof predicate === `function` && !predicate(getState, action)) {
      return next(action)
    }

    const started = timer.now()
    const prevState = transformer(getState())

    const returnValue = next(action)
    const took = timer.now() - started

    const nextState = transformer(getState())

    // formatters
    const time = new Date()

    const formattedTime = timestamp ? ` @ ${pad(time.getHours(), 2)}:${pad(time.getMinutes(), 2)}:${pad(time.getSeconds(), 2)}.${pad(time.getMilliseconds(), 3)}` : ``
    const formattedDuration = duration ? ` in ${took.toFixed(2)} ms` : ``
    const formattedAction = actionTransformer(action)
    const message = `action ${formattedAction.type}${formattedTime}${formattedDuration}`

    logger.info(message)
    logger[level]({prevState}, 'prev state')
    logger[level]({formattedAction}, 'action')
    logger[level]({nextState}, 'next state')

    return returnValue
  }
}

export default createLogger
